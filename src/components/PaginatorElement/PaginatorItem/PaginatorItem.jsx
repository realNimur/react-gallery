import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { setQueryPage } from '../../../store/filters/actions';
import styles from './styles.module.scss';

const PaginatorItem = function PaginatorItem({ text }) {
  const dispatch = useDispatch();
  const { request, themeColor } = useSelector((store) => store);
  const { page: currentPage } = request;

  const handlerItemPaginator = (number) => {
    if (currentPage !== Number(text)) {
      dispatch(setQueryPage(number));
    }
  };
  return (
    <button
      type="button"
      className={cn(styles['paginator-list__item'], currentPage === Number(text) && styles.active, themeColor === 'white' && styles['paginator-list__item_white'])}
      onClick={() => {
        handlerItemPaginator(text);
      }}
    >
      {text}
    </button>
  );
};

PaginatorItem.propTypes = {
  text: PropTypes.number.isRequired,
};
export default PaginatorItem;
