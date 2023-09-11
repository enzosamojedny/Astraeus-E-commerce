import { useState } from 'react'
import './counter.css'
function Counter({ onIncrease, onDecrease }) {
    const [counter, setCounter] = useState(1)
    const increase = () => {
        setCounter(count => count + 1);
        onIncrease();
    };
    const decrease = () => {
        if (counter > 1) {
            setCounter(count => count - 1);
            onDecrease();
        }
    };
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