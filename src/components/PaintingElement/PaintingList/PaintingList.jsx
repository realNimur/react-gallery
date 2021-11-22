import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import PaintingItem from "../PaintingItem";
import Paginator from "../Paginator";
import Loader from "../Loader";
import NotFound from "../NotFound";
import styles from './styles.module.scss';

const PaintingList = () => {
    const [listPaintings, setListPaintings] = useState([]);
    let {search} = useLocation();
    const [fetchRequestData, setFetchRequestData] = useState({
        fetching: false,
        error: '',
    });
    const {authors, locations, limitPaintings: limitValue, request} = useSelector(store => store);
    const {_page: currentPage} = request;
    const getNameDataById = (array, id) => {
        return array.filter(item => item.id === id)[0];
    }
    const [oldUrlParam, setOldUrlParam] = useState('start');
    useEffect(() => {
        const newSearchParam = new URLSearchParams(search);
        if (newSearchParam.get('_page')) {
            newSearchParam.delete('_page');
        }
        if (oldUrlParam !== newSearchParam.toString()) {
            setOldUrlParam(newSearchParam.toString());
            setFetchRequestData((prevState) => {
                return {
                    ...prevState,
                    fetching: true
                }
            });
            fetch(`https://test-front.framework.team/paintings?${newSearchParam.toString()}`)
                .then(res => {
                    if (res.ok) {
                        return res.json();
                    } else {
                        throw new Error('Something went wrong');
                    }
                })
                .then(data => setListPaintings([...data]))
                .catch((error) => {
                    setFetchRequestData((prevState) => {
                        return {
                            ...prevState,
                            error: error.message,
                        }
                    });
                })
                .finally(() => {
                    setFetchRequestData((prevState) => {
                        return {
                            ...prevState,
                            fetching: false
                        }
                    });
                })
        }
    }, [search]);
    return (
        <>
            {fetchRequestData.fetching ? <Loader/>
                :
                fetchRequestData.error ? <h2 style={{color: 'grey'}}>{fetchRequestData.error}</h2>
                    :
                    listPaintings.length ?
                        <>
                            <div className={styles["paintings-list"]}>
                                {listPaintings.slice(limitValue * (currentPage - 1), currentPage * limitValue).map((painting) =>
                                    <PaintingItem
                                        key={painting.id}
                                        created={painting.created}
                                        author={getNameDataById(authors, painting.authorId)?.name}
                                        location={getNameDataById(locations, painting.locationId)?.location}
                                        imageUrl={painting.imageUrl} name={painting.name}
                                    />)}
                            </div>
                            <Paginator totalPaintings={listPaintings.length}/>
                        </>
                        :
                        <NotFound/>
            }
        </>
    );
};

export default PaintingList;