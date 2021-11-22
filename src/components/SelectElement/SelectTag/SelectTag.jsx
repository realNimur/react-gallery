import React, {useEffect, useState} from 'react';
import cn from 'classnames';
import {useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setAuthors, setLocations, setQueryPage, setTypeShowList} from "../../store/filters/actions";
import SelectItem from "../SelectItem";
import styles from './styles.module.scss';

const SelectTag = ({type, caption}) => {
        const dispatch = useDispatch();
        const [searchParams, setSearchParams] = useSearchParams({});
        const {typeListShow, request, [type]: data, themeColor} = useSelector(store => store);
        const {activeAuthor, activeLocation} = request;
        const [captionSelect, setCaptionSelect] = useState(caption);
        const [showList, setShowList] = useState(false);
        const [dateParam, setDateParam] = useState({
            from: '',
            before: '',
            typing: false
        });
        const isCreatedType = type === 'created' ? true : false;
        const isAuthorsType = type === 'authors' ? true : false;
        const isLocationsType = type === 'locations' ? true : false;


        const toggleShowList = () => {
            dispatch(setTypeShowList(type));
        };
        const handleClickItemSelect = () => {
            if (!isCreatedType) {
                setShowList(false);
            }
        }
        const handlerInput = (e) => {
            setDateParam((prevState) => {
                return {
                    ...prevState,
                    [e.target.id]: e.target.value,
                    typing: true,
                }
            })
        }

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
            setDateParam((prevState) => {
                return {
                    ...prevState,
                    typing: false
                }
            })
        }

        const getNameDataById = (array, id) => {
            return array.filter(item => item.id === id)[0];
        }

        useEffect(() => {
            if (!isCreatedType) {
                fetch(`https://test-front.framework.team/${type}`)
                    .then(res => res.json())
                    .then(data => {
                        if (isAuthorsType) {
                            dispatch(setAuthors(data));
                        } else if (isLocationsType) {
                            dispatch(setLocations(data));
                        }
                    })
            }
        }, [])
        useEffect(() => {
            const createFromUrl = JSON.parse(searchParams.get('created_gte'));
            const createBeforeUrl = JSON.parse(searchParams.get('created_lte'));
            if (createFromUrl) {
                setDateParam((prevState) => {
                    return {
                        ...prevState,
                        from: createFromUrl
                    }
                });
            }
            if (createBeforeUrl) {
                setDateParam((prevState) => {
                    return {
                        ...prevState,
                        before: createBeforeUrl
                    }
                });
            }
        }, [])
        useEffect(() => {
            if (!isCreatedType) {
                const getNameDataById = (array, id) => {
                    return array.filter(item => item.id === id)[0];
                }
                if (isAuthorsType) {
                    const authorIdFromUrl = JSON.parse(searchParams.get('authorId'));
                    if (authorIdFromUrl) {
                        setCaptionSelect(getNameDataById(data, authorIdFromUrl)?.name);
                    }
                } else if (isLocationsType) {
                    const locationIdFromUrl = JSON.parse(searchParams.get('locationId'));
                    if (locationIdFromUrl) {
                        setCaptionSelect(getNameDataById(data, locationIdFromUrl)?.location);
                    }
                }
            }
        }, [activeAuthor, activeLocation, data]);
        useEffect(() => {
            let fromTimerId;
            if (isCreatedType && dateParam.typing) {
                fromTimerId = setTimeout(() => setDateValue('created_gte', dateParam.from), 1000);
            }
            return () => {
                fromTimerId && clearTimeout(fromTimerId);
            }
        }, [dateParam.from])
        useEffect(() => {
            let beforeTimerId;
            if (isCreatedType && dateParam.typing) {
                beforeTimerId = setTimeout(() => setDateValue('created_lte', dateParam.before), 1000);
            }
            return () => {
                beforeTimerId && clearTimeout(beforeTimerId);
            }
        }, [dateParam.before])
        useEffect(() => {
            setShowList(type === typeListShow);
        }, [typeListShow])
        if ((data && data.length === 0) && !isCreatedType) return null;
        return (
            <>
                <div className={cn(styles.dropdown, showList && styles.open)}>
                    <div className={cn(styles.dropdown__header, themeColor === "white" && styles["dropdown__header_white"])}
                    >
                        <p className={styles.dropdown__caption}>{captionSelect}</p>
                        <button className={styles.dropdown__btn} onClick={toggleShowList}>
                            <svg width="10" height="6" preserveAspectRatio="xMinYMin meet" viewBox="0 0 10 6" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9.67861 1.8337L5.77064 5.68539C5.34503 6.10487 4.65497 6.10487 4.22936 5.68539L0.321394 1.8337C-0.365172 1.15702 0.121082 -8.3659e-08 1.09203 0L8.90797 6.73452e-07C9.87892 7.57113e-07 10.3652 1.15702 9.67861 1.8337Z"
                                    fill="white" fillOpacity="0.3"/>
                            </svg>
                        </button>
                    </div>
                    <ul
                        className={cn(styles["dropdown-content"], isCreatedType && styles["dropdown-content_created"])}
                        onClick={handleClickItemSelect}>
                        {!isCreatedType && data.map(item => {
                                return (
                                    <SelectItem key={item.id} type={type} item={item}/>
                                )
                            }
                        )}
                        {isCreatedType && <>
                            <li className={styles["dropdown-content__item_created"]}>
                                <input
                                    type="text"
                                    placeholder={"from"}
                                    value={dateParam.from}
                                    id="from"
                                    onChange={handlerInput}/>
                            </li>
                            <li className={styles["dropdown-content__item_created"]}>—</li>
                            <li className={styles["dropdown-content__item_created"]}>
                                <input
                                    type="text"
                                    placeholder={"before"}
                                    value={dateParam.before}
                                    id="before"
                                    onChange={handlerInput}/>
                            </li>
                        </>}
                    </ul>

                </div>
            </>
        );
    }
;

export default SelectTag;