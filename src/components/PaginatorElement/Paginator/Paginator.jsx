import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import cn from "classnames";
import {setDecrementPage, setFirstPage, setIncrementPage, setLastPage, setQueryPage} from "../../store/filters/actions";
import PaginatorItem from "../PaginatorItem";
import styles from './styles.module.scss'

const Paginator = ({totalPaintings}) => {

    const dispatch = useDispatch();
    const {limitPaintings: limit, request,themeColor} = useSelector(store => store);
    const {_page: currentPage} = request;
    const totalPages = Math.ceil(totalPaintings / limit);
    let pages = [...Array.from({length: totalPages}, (v, k) => k + 1)];
    if (currentPage === 1) {
        pages = pages.slice(0, 3);
    } else if (currentPage > 1 && currentPage + 1 < totalPages) {
        pages = pages.slice(currentPage - 2, currentPage + 1)
    } else if (currentPage + 1 >= totalPages) {
        let firstPages = totalPages - 3 >= 0 ? totalPages - 3 : totalPages - 2 >= 0 ? totalPages - 2 : totalPages - 1 >= 0 ? totalPages - 1 : 0;
        pages = pages.slice(firstPages, totalPages);
    }
    return (
        <ul className={cn(styles["paginator-list"], themeColor === "white" && styles["paginator-list_white"])}>
            <li
                className={cn(styles["paginator-list__arrow"], currentPage === 1 && styles.disabled)}
                onClick={() => currentPage !== 1 && dispatch(setQueryPage(1))}
            >
                <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M2.71401 6.49988L7.80231 1.62545C8.16797 1.275 8.16797 0.706895 7.80231 0.356587C7.43665 0.00613754 6.84368 0.00613754 6.47787 0.356587L0.727266 5.86567C0.544436 6.04091 0.453125 6.27034 0.453125 6.49988C0.453125 6.72951 0.544614 6.9591 0.727266 7.13426L6.47787 12.6433C6.84368 12.9939 7.43668 12.9939 7.80231 12.6433C8.16797 12.293 8.16797 11.7248 7.80231 11.3745L2.71401 6.49988ZM13.632 11.3745C13.9977 11.7248 13.9977 12.293 13.632 12.6433C13.2663 12.9939 12.6735 12.9939 12.3075 12.6433L6.55693 7.13428C6.3741 6.95913 6.28293 6.72953 6.28293 6.49991C6.28293 6.27037 6.37427 6.04077 6.55693 5.8657L12.3075 0.356587C12.6735 0.00613754 13.2663 0.00613754 13.632 0.356587C13.9977 0.706895 13.9977 1.27498 13.632 1.62545L8.54358 6.49988L13.632 11.3745Z"
                        fill="white" fillOpacity="1"/>
                </svg>
            </li>
            <li
                className={cn(styles["paginator-list__arrow"], currentPage === 1 && styles.disabled)}
                onClick={() => currentPage !== 1 && dispatch(setDecrementPage())}
            >
                <svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.932837 7.13428L6.73159 12.6433C7.10046 12.9939 7.69852 12.9939 8.06721 12.6433C8.43593 12.293 8.43593 11.7248 8.06721 11.3745L2.93621 6.49991L8.06706 1.62545C8.43578 1.275 8.43578 0.706895 8.06706 0.356587C7.69834 0.00613754 7.10031 0.00613754 6.73144 0.356587L0.932687 5.86567C0.748326 6.04091 0.65625 6.27034 0.65625 6.49988C0.65625 6.72953 0.748506 6.95913 0.932837 7.13428Z"
                        fill="white" fillOpacity="1"/>
                </svg>
            </li>
            {
                pages.map((item) => <PaginatorItem key={item} text={item}/>)
            }
            <li
                className={cn(styles["paginator-list__arrow"], currentPage === totalPages && styles.disabled)}
                onClick={() => {
                    currentPage !== totalPages && dispatch(setIncrementPage())
                }}
            >
                <svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M8.06716 7.13428L2.26841 12.6433C1.89954 12.9939 1.30148 12.9939 0.932791 12.6433C0.56407 12.293 0.56407 11.7248 0.932791 11.3745L6.06379 6.49991L0.93294 1.62545C0.564219 1.275 0.564219 0.706895 0.93294 0.356587C1.30166 0.00613754 1.89969 0.00613754 2.26856 0.356587L8.06731 5.86567C8.25167 6.04091 8.34375 6.27034 8.34375 6.49988C8.34375 6.72953 8.25149 6.95913 8.06716 7.13428Z"
                        fill="white"/>
                </svg>
            </li>
            <li
                className={cn(styles["paginator-list__arrow"], currentPage === totalPages && styles.disabled)}
                onClick={() => {
                    currentPage !== totalPages && dispatch(setLastPage(totalPages))
                }}
            >
                <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M11.286 6.49988L6.19769 1.62545C5.83203 1.275 5.83203 0.706895 6.19769 0.356587C6.56335 0.00613754 7.15632 0.00613754 7.52213 0.356587L13.2727 5.86567C13.4556 6.04091 13.5469 6.27034 13.5469 6.49988C13.5469 6.72951 13.4554 6.9591 13.2727 7.13426L7.52213 12.6433C7.15632 12.9939 6.56332 12.9939 6.19769 12.6433C5.83203 12.293 5.83203 11.7248 6.19769 11.3745L11.286 6.49988ZM0.367995 11.3745C0.00233503 11.7248 0.00233503 12.293 0.367995 12.6433C0.733655 12.9939 1.32645 12.9939 1.69247 12.6433L7.44307 7.13428C7.6259 6.95913 7.71707 6.72953 7.71707 6.49991C7.71707 6.27037 7.62573 6.04077 7.44307 5.8657L1.69247 0.356587C1.32648 0.00613754 0.733655 0.00613754 0.367995 0.356587C0.00233503 0.706895 0.00233503 1.27498 0.367995 1.62545L5.45642 6.49988L0.367995 11.3745Z"
                        fill="white"/>
                </svg>
            </li>
        </ul>
    );
};

export default Paginator;