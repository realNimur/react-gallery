import React from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  setQueryAuthor, setQueryLocation, setQueryPage, setTypeShowList,
} from '../../../store/filters/actions';
import styles from './styles.module.scss';

const SelectItem = function SelectItem({ item, type }) {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const { id, name, location } = item;
  const text = name || location;

  const handlerSelectItemClick = () => {
    const newSearchParams = new URLSearchParams(searchParams);
    let queryName = '';
    if (type === 'authors') {
      queryName = 'authorId';
      dispatch(setQueryAuthor(text));
    } else if (type === 'locations') {
      queryName = 'locationId';
      dispatch(setQueryLocation(text));
    }
    newSearchParams.set(queryName, `${id}`);
    dispatch(setTypeShowList(''));
    dispatch(setQueryPage(1));
    setSearchParams(newSearchParams);
  };
  return (
    <button
      type="button"
      onClick={handlerSelectItemClick}
      className={styles['dropdown-content__item']}
    >
      {text}
    </button>
  );
};
SelectItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    location: PropTypes.string,
  }),
  type: PropTypes.string.isRequired,
};
SelectItem.defaultProps = {
  item: {
    id: 1,
    name: 'John',
    location: 'Moscow',
  },
};
export default SelectItem;
