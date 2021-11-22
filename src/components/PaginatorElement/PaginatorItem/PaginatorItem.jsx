import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setQueryPage} from "../../store/filters/actions";
import cn from "classnames";
import styles from './styles.module.scss'

const PaginatorItem = ({text}) => {
    const dispatch = useDispatch();
    const {request, themeColor} = useSelector(store => store);
    const {_page: currentPage,} = request;

    const handlerItemPaginator = (number) => {
        if (currentPage !== Number(text)) {
            dispatch(setQueryPage(number));
        }
    }
    return (
        <li className={cn(styles["paginator-list__item"], currentPage === Number(text) && styles.active, themeColor === "white" && styles["paginator-list__item_white"])}
            onClick={() => {
                console.log(text);
                handlerItemPaginator(text)
            }}>{text}</li>
    );
};

export default PaginatorItem;