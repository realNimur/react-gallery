import React from 'react';
import {useDispatch} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {setQueryAuthor, setQueryLocation, setQueryPage} from "../../store/filters/actions";
import styles from './styles.module.scss'

const SelectItem = ({item, type}) => {
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const {id} = item;
    const text = item.name || item.location;

    const handlerSelectItemClick = (type, id, text) => {
        const newSearchParams = new URLSearchParams(searchParams);
        let queryName = '';
        if (type === 'authors') {
            queryName = 'authorId';
            dispatch(setQueryAuthor(text));
        } else if (type === 'locations') {
            queryName = 'locationId'
            dispatch(setQueryLocation(text));
        }
        newSearchParams.set(queryName, `${id}`);
        dispatch(setQueryPage(1));
        setSearchParams(newSearchParams);
    }
    return (
        <li onClick={() => handlerSelectItemClick(type, id, text)}
            className={styles["dropdown-content__item"]}>{text}</li>
    );
};

export default SelectItem;