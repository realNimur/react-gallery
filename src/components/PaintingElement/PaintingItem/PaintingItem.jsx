import React from 'react';
import styles from './styles.module.scss';

const PaintingItem = ({imageUrl, name, location, author, created}) => {
    return (
        //style={{backgroundImage: `url(https://test-front.framework.team${imageUrl})`}}
        <div className={styles["painting-item"]}>
            <div className={styles["painting-item__description"]}>
                <p className={styles["painting-item__caption"]}>{name}</p>
                <div className={styles["painting-item__more"]}>
                    <p className={styles["painting-item__text"]}><span
                        className={styles["painting-item__text_bold"]}>Author: </span>{author}</p>
                    <p className={styles["painting-item__text"]}><span
                        className={styles["painting-item__text_bold"]}>Created: </span>{created}</p>
                    <p className={styles["painting-item__text"]}><span
                        className={styles["painting-item__text_bold"]}>Location: </span>{location}</p>
                </div>
            </div>
        </div>
    );
};

export default PaintingItem;