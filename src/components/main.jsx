import React from "react";
import "./styles/styles.scss";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "../actions/index";

const Rendermain = () => {
    const myState = useSelector((state) => state.changeNumber);
    const dispatch = useDispatch();
    return (
        <div className="main-div">
            <div className="container">
                <h1>Increment/Decrement counter</h1>
                <h4>using React and Redux</h4>
                <div className="quantity">
                    <a className="quantity__minus" title="Decrement" onClick={() => dispatch(decNumber())}><span>-</span></a>
                    <input name="quantity" type="text" className="quantity__input" defaultValue={myState} />
                    <a className="quantity__plus" title="Increment" onClick={() => dispatch(incNumber())}><span>+</span></a>
                </div>

            </div>
        </div>
    )
}

export default Rendermain;