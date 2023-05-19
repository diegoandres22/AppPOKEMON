import './Paginate.css'

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextPage, backPage } from "../../redux/actions";

const Paginate = () => {

    const dispatch = useDispatch();

    const { page } = useSelector(state => state);

    const next = () => {
        dispatch(nextPage())
    }
    const back = () => {
        dispatch(backPage())
    }

    return (
        <div className="pagCont">
            <button onClick={back}>back</button>
            <p>{page - 1}</p>

            <p>{page}</p>

            <p>{page + 1}</p>

            <button onClick={next}>next</button>
        </div>
    )
}

export default Paginate;