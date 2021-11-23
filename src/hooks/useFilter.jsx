import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setQueryLimit, setQueryPage } from '../store/filters/actions';

export default function useFilter() {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams({});
  const { request } = useSelector((store) => store);
  const { page: currentPage } = request;

  useEffect(() => {
    const newSearchParam = new URLSearchParams(searchParams);
    newSearchParam.set('_page', currentPage);
    setSearchParams(newSearchParam);
    // eslint-disable-next-line
  }, [currentPage]);

  useEffect(() => {
    const { innerWidth: windowWidth } = window;
    let limitValue;
    if (windowWidth < 768) {
      limitValue = 6;
    } else if (windowWidth < 1024) {
      limitValue = 8;
    } else {
      limitValue = 9;
    }
    dispatch(setQueryLimit(limitValue));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const newSearchParam = new URLSearchParams(searchParams);
    const pageFromUrl = Number(newSearchParam.get('_page'));
    if (pageFromUrl > 0 && currentPage !== pageFromUrl) {
      dispatch(setQueryPage(pageFromUrl));
    }
    // eslint-disable-next-line
  }, []);
}
