import { useState } from 'react'
import './counter.css'
function Counter({ onChange }) {
    const [counter, setCounter] = useState(0)
    const increase = () => {
        setCounter(count => count + 1)
        onChange(counter + 1)//im somehow sending data to parent?
    }
    const decrease = () => {
        if (counter > 0) {
            setCounter(count => count - 1)
            onChange(counter - 1)
        }


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