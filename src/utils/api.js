const baseUrl = 'https://test-front.framework.team';

export default async function fetchData(params, typeOfFetch) {
  let url = '';
  if (typeOfFetch === 'all') {
    url = `${baseUrl}/paintings?${params}`;
  } else {
    url = `${baseUrl}/${params}`;
  }
  const response = await fetch(url);
  if (response.ok) {
    const json = await response.json();
    return json;
  }
  const { status, statusText } = response;
  throw new Error(`${status} : ${statusText || 'Failed to fetch'}`);
}
