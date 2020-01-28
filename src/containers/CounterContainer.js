import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement } from '../modules/counter';
import { INCREMENT, DECREMENT } from '../modules/counter';
import Counter from '../components/Counter';

const CounterContainer = () => {
    const counter = useSelector(state => state.counter,[]);
    const dispatch = useDispatch();
    
    const onIncrease = useCallback(() => dispatch({type: INCREMENT}),[dispatch]);
    const onDecrease = useCallback(() => dispatch({type: DECREMENT}),[dispatch]);
    
    return (
        <Counter number={counter} onIncrease={onIncrease} onDecrease={onDecrease} />
    );
};

export default CounterContainer;