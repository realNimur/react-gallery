import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import {
  setAuthors, setLocations, setQueryPage, setTypeShowList,
} from '../store/filters/actions';
import fetchData from '../utils/api';

export default function useSelectTag(type, caption) {
  const dispatch = useDispatch();
  const {
    typeListShow, request, [type]: data,
  } = useSelector((store) => store);
  const { activeAuthor, activeLocation } = request;
  const [showList, setShowList] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams({});
  const [captionSelect, setCaptionSelect] = useState(caption);
  const [dateParam, setDateParam] = useState({
    from: '',
    before: '',
    typing: false,
  });
  const isCreatedType = type === 'created';
  const isAuthorsType = type === 'authors';
  const isLocationsType = type === 'locations';

  const toggleShowList = () => {
    dispatch(setTypeShowList(type));
  };
  const handlerInput = (e) => {
    setDateParam((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
      typing: true,
    }));
  };

  const setDateValue = (queryName, valueInput) => {
    const newSearchParams = new URLSearchParams(searchParams);
    if (valueInput) {
      if (newSearchParams.get('_page')) {
        newSearchParams.delete('_page');
      }
      dispatch(setQueryPage(1));
      newSearchParams.set(queryName, `${valueInput}`);
    } else if (!valueInput && newSearchParams.get(queryName)) {
      newSearchParams.delete(queryName);
    }
    setSearchParams(newSearchParams);
    setDateParam((prevState) => ({
      ...prevState,
      typing: false,
    }));
  };

  useEffect(() => {
    if (!isCreatedType) {
      fetchData(type, 'type')
        .then((dataRes) => {
          if (isAuthorsType) {
            dispatch(setAuthors(dataRes));
          } else if (isLocationsType) {
            dispatch(setLocations(dataRes));
          }
        })
        .catch((error) => setCaptionSelect(`${error}`));
    }
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    const createFromUrl = JSON.parse(searchParams.get('created_gte'));
    const createBeforeUrl = JSON.parse(searchParams.get('created_lte'));
    if (createFromUrl) {
      setDateParam((prevState) => ({
        ...prevState,
        from: createFromUrl,
      }));
    }
    if (createBeforeUrl) {
      setDateParam((prevState) => ({
        ...prevState,
        before: createBeforeUrl,
      }));
    }
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    if (!isCreatedType) {
      const getNameDataById = (array, id) => array.filter((item) => item.id === id)[0];
      if (isAuthorsType) {
        const authorIdFromUrl = JSON.parse(searchParams.get('authorId'));
        if (authorIdFromUrl && data && data.length) {
          setCaptionSelect(getNameDataById(data, authorIdFromUrl).name);
        }
      } else if (isLocationsType) {
        const locationIdFromUrl = JSON.parse(searchParams.get('locationId'));
        if (locationIdFromUrl && data && data.length) {
          setCaptionSelect(getNameDataById(data, locationIdFromUrl).location);
        }
      }
    }
    // eslint-disable-next-line
  }, [activeAuthor, activeLocation, data]);
  useEffect(() => {
    let fromTimerId;
    if (isCreatedType && dateParam.typing) {
      fromTimerId = setTimeout(() => setDateValue('created_gte', dateParam.from), 500);
    }
    return () => {
      if (fromTimerId) clearTimeout(fromTimerId);
    };
    // eslint-disable-next-line
  }, [dateParam.from]);
  useEffect(() => {
    let beforeTimerId;
    if (isCreatedType && dateParam.typing) {
      beforeTimerId = setTimeout(() => setDateValue('created_lte', dateParam.before), 500);
    }
    return () => {
      if (beforeTimerId) clearTimeout(beforeTimerId);
    };
    // eslint-disable-next-line
  }, [dateParam.before]);
  useEffect(() => {
    setShowList(type === typeListShow);
    // eslint-disable-next-line
  }, [typeListShow]);
  return {
    showList,
    captionSelect,
    toggleShowList,
    isCreatedType,
    dateParam,
    handlerInput,
  };
}
