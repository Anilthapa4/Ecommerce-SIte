import React,{useState,useEffect} from 'react'
// useState is used to change the state of variable from initial to other state and is used to store the value.

//useEffect is sideeffect of pages while pagerendering.

const IncrementDecrement = () => {
    const [num,setNum]=useState(0)
    //num is a variable name which has initial value 0(can be anyone that is defined above,string,obj,array anything can be used)

    // useState is always defined before return.
    //setNum is a function which changes the state of a variable num and store changed value

    const increment=()=>(
        setNum(num+1)
    )

    useEffect(()=>{
        alert('this is side effect due to useEffect hooks')
    },[])

    return (
        <>
        <h2>{num}</h2>
        <button className='btn btn-primary my-2' onClick={increment}>Click to increase</button>
        {/* increment is a function and is always defined inside curlybraces and doesnot require open paranthesis as in jS */}
        &nbsp;&nbsp;
        {
            num>0 &&
            <button className='btn btn-danger my-2' onClick={()=>setNum(num-1)}>Click to Decrease</button>
        }
        {/* curlybraces is used for applying conditions.here if the first one is incorrect then it deosnot check the other one. */}
        
        </>
    )
}

export default IncrementDecrement