import React from 'react'
import AnimatedNumber from 'react-animated-number'
const CounterHook = () => {
    const [number, setNumber] = React.useState(0)
return (
    <div>
        <button  className='rotation'onClick={() => setNumber(number + 1)} >+</button>
        <AnimatedNumber className='NumberDisplay' value ={number}/>
        <button className='rotation' onClick={() => setNumber(number - 1)} >-</button>
    </div>
) 
}
export default CounterHook