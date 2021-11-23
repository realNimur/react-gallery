import React from 'react';
import { useSelector } from 'react-redux';
import PaintingItem from '../PaintingItem';
import Paginator from '../../PaginatorElement/Paginator';
import Loader from '../../Loader';
import NotFound from '../../NotFound';
import usePaintingsList from '../../../hooks/usePaintingsList';
import styles from './styles.module.scss';

const PaintingList = function PaintingList() {
  const {
    authors, locations, limitPaintings: limitValue, request,
  } = useSelector((store) => store);
  const { page: currentPage } = request;
  const { fetchRequestData, listPaintings } = usePaintingsList();
  const getNameDataById = (array, id) => array.filter((item) => item.id === id)[0];

  return (
    <>
      {fetchRequestData.fetching ? <Loader /> : null}
      {(!fetchRequestData.fetching && fetchRequestData.error)
        ? <h2 style={{ color: 'grey' }}>{fetchRequestData.error}</h2> : null}
      {((!fetchRequestData.fetching && !fetchRequestData.error)
        ? (listPaintings && listPaintings.length === 0) : null)
      && <NotFound />}
      {((!fetchRequestData.fetching && !fetchRequestData.error)
        && (listPaintings && listPaintings.length > 0)
        && (authors.length > 0 || locations.length > 0))
        ? (
          <>
            <div className={styles['paintings-list']}>
              {listPaintings
                .slice(limitValue * (currentPage - 1), currentPage * limitValue)
                .map((painting) => {
                  const {
                    authorId, locationId, created, id, imageUrl, name,
                  } = painting;
                  const authorName = getNameDataById(authors, authorId);
                  const locationCaption = getNameDataById(locations, locationId);
                  if (!authorName || !locationCaption) return null;
                  return (
                    <PaintingItem
                      key={id}
                      created={created}
                      author={authorName.name}
                      location={locationCaption.location}
                      imageUrl={imageUrl}
                      name={name}
                    />
                  );
                })}
            </div>
            <Paginator totalPaintings={listPaintings.length} />
          </>
        ) : null}
    </>
  );
};

export default PaintingList;
