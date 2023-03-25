import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './authSlice';

export function Counter() {
    // const { signUpUser, isLoading, user} = useSelector((state) => state.auth.value);
    // const dispatch = useDispatch();

    return (
        <div>
            {/* <div className="text-white">
                <button aria-label="Increment value" onClick={() => dispatch(increment())}>
                    Increment
                </button>
                <span>{count}</span>
                <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
                    Decrement
                </button>
            </div> */}
        </div>
    );
}
