import { React, useState } from 'react'
import './counter.css'
function Counter() {
    const [counter, setCounter] = useState(0)
    const increase = () => {
        setCounter(count => count + 1)
    }
    const decrease = () => {
        setCounter(count => count > 0 ? count - 1 : count)
    }
    return (
        <div className="counter">
            <div className="btn__container">
                <button className="control__btn" onClick={increase}>+</button>
                <span className="counter__output">{counter}</span>
                <button className="control__btn" onClick={decrease}>-</button>
            </div>
        </div>
    );
}
export default Counter