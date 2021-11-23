import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const PaintingItem = function PaintingItem({
  imageUrl, name, location, author, created,
}) {
  return (
    <div
      className={styles['painting-item']}
      style={{ backgroundImage: `url(https://test-front.framework.team${imageUrl})` }}
    >
      <div className={styles['painting-item__description']}>
        <p className={styles['painting-item__caption']}>{name}</p>
        <div className={styles['painting-item__more']}>
          <p className={styles['painting-item__text']}>
            <span
              className={styles['painting-item__text_bold']}
            >
              Author:
            </span>
            {author}
          </p>
          <p className={styles['painting-item__text']}>
            <span
              className={styles['painting-item__text_bold']}
            >
              Created:
            </span>
            {created}
          </p>
          <p className={styles['painting-item__text']}>
            <span
              className={styles['painting-item__text_bold']}
            >
              Location:
            </span>
            {location}
          </p>
        </div>
      </div>
    </div>
  );
};

PaintingItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
};
export default PaintingItem;
