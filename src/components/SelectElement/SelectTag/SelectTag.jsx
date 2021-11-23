import React from 'react';
import cn from 'classnames';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import SelectItem from '../SelectItem';
import useSelectTag from '../../../hooks/useSelectTag';
import styles from './styles.module.scss';

const SelectTag = function SelectTag({ type, caption }) {
  const {
    [type]: data, themeColor,
  } = useSelector((store) => store);

  const {
    showList,
    captionSelect,
    toggleShowList,
    isCreatedType,
    dateParam,
    handlerInput,
  } = useSelectTag(type, caption);

  return (
    <div className={cn(styles.dropdown, showList && styles.open)}>
      <div className={cn(styles.dropdown__header, themeColor === 'white' && styles.dropdown__header_white)}>
        <p className={styles.dropdown__caption}>{captionSelect}</p>
        <button type="button" className={styles.dropdown__btn} onClick={toggleShowList}>
          <svg
            width="10"
            height="6"
            preserveAspectRatio="xMinYMin meet"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.67861 1.8337L5.77064 5.68539C5.34503 6.10487 4.65497 6.10487 4.22936 5.68539L0.321394 1.8337C-0.365172 1.15702 0.121082 -8.3659e-08 1.09203 0L8.90797 6.73452e-07C9.87892 7.57113e-07 10.3652 1.15702 9.67861 1.8337Z"
              fill="white"
              fillOpacity="0.3"
            />
          </svg>
        </button>
      </div>

      {((data && data.length > 1) || isCreatedType)
      && (
        <ul
          className={cn(styles['dropdown-content'], isCreatedType && styles['dropdown-content_created'])}
        >
          {!isCreatedType && data.map((item) => (
            <SelectItem key={item.id} type={type} item={item} />
          ))}
          {isCreatedType && (
            <>
              <li className={styles['dropdown-content__item_created']}>
                <input
                  type="text"
                  placeholder="from"
                  value={dateParam.from}
                  id="from"
                  onChange={handlerInput}
                />
              </li>
              <li className={styles['dropdown-content__item_created']}>—</li>
              <li className={styles['dropdown-content__item_created']}>
                <input
                  type="text"
                  placeholder="before"
                  value={dateParam.before}
                  id="before"
                  onChange={handlerInput}
                />
              </li>
            </>
          )}
        </ul>
      )}
    </div>
  );
};

SelectTag.propTypes = {
  type: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
};

export default SelectTag;
