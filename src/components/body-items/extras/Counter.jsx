import { useState } from 'react'
import './counter.css'
function Counter({ onIncrease, onDecrease }) {


    const [counter, setCounter] = useState(0)
    const increase = () => {
        setCounter(count => count + 1);
        onIncrease(); // Call the onIncrease callback
    };

    const decrease = () => {
        if (counter > 0) {
            setCounter(count => count - 1);
            onDecrease(); // Call the onDecrease callback
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