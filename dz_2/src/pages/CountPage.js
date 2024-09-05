import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import {increment, decrement, clear, addTen} from "../redux/action";

const CountPage = () => {
    const dispatch = useDispatch()
    const count = useSelector(state => state.count)
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(clear())}>clear</button>
            <button onClick={() => dispatch(addTen())}>+10</button>
        </div>
    );
};

export default CountPage;