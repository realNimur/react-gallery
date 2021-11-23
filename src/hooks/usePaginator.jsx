export default function usePaginator(totalPaintings, limit, currentPage) {
  const totalPages = Math.ceil(totalPaintings / limit);
  let pages = [...Array.from({ length: totalPages }, (v, k) => k + 1)];
  if (currentPage === 1) {
    pages = pages.slice(0, 3);
  } else if (currentPage > 1 && currentPage + 1 < totalPages) {
    pages = pages.slice(currentPage - 2, currentPage + 1);
  } else if (currentPage + 1 >= totalPages) {
    let firstPages = null;
    if (totalPages - 3 >= 0) {
      firstPages = totalPages - 3;
    } else if (totalPages - 2 >= 0) {
      firstPages = totalPages - 2;
    } else if (totalPages - 1 >= 0) {
      firstPages = totalPages - 1;
    } else {
      firstPages = 0;
    }
    pages = pages.slice(firstPages, totalPages);
  }
  return { pages, totalPages };
}
