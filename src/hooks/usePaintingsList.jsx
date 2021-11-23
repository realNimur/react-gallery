import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import fetchData from '../utils/api';

export default function usePaintingsList() {
  const [listPaintings, setListPaintings] = useState([]);
  const [fetchRequestData, setFetchRequestData] = useState({
    fetching: false,
    error: '',
  });
  const [oldUrlParam, setOldUrlParam] = useState('start');
  const { search } = useLocation();

  useEffect(() => {
    const newSearchParam = new URLSearchParams(search);
    if (newSearchParam.get('_page')) {
      newSearchParam.delete('_page');
    }
    if (oldUrlParam !== newSearchParam.toString()) {
      const url = newSearchParam.toString();
      setOldUrlParam(url);
      setFetchRequestData((prevState) => ({
        ...prevState,
        fetching: true,
      }));
      fetchData(url, 'all')
        .then((data) => setListPaintings(data))
        .catch((error) => {
          setFetchRequestData((prevState) => ({
            ...prevState,
            error: error.message,
          }));
        })
        .finally(() => {
          setFetchRequestData((prevState) => ({
            ...prevState,
            fetching: false,
          }));
        });
    }
    // eslint-disable-next-line
  }, [search]);
  return {
    fetchRequestData,
    listPaintings,
  };
}
