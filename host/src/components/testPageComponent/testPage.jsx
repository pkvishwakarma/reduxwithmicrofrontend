import React from "react";
import {increment, decrement,incrementByAmount} from 'remoteapp/reduxState/store/microfrontendslicer/countslicer';
import ButtonComponent from 'remoteapp/components/buttonComponent/buttonComponent';
import {useDispatch,useSelector} from 'react-redux';

export default function TestPage() {
    var dispatch=useDispatch();
    var count=useSelector((state)=>state.counter.count);

    return (
        <>
            <div>
                <label>Test Page From Remote Application</label>
                <p>counter value : {count}</p>
                <section>
                    <ButtonComponent btnType={'button'} btnLabel={'Increment'} onClick={()=>{dispatch(increment())}} />
                    <ButtonComponent btnType={'button'} btnLabel={'Decrement'} onClick={()=>{dispatch(decrement())}} />
                    <ButtonComponent btnType={'button'} btnLabel={'Increment Counter by Amount'} onClick={()=>{dispatch(incrementByAmount(5))}} />
                </section>
            </div>
        </>
    )
}