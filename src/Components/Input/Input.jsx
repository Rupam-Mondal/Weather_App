import { useState } from "react"
import UseStore from "../../context/Inputvalue.js"

function Input(){
    let city = ''
    const { place, updatePlace } = UseStore()
    function onchangeHandler(e){
        city = e.target.value
        console.log(city)
    }
    function onclickHandler(){
        updatePlace(city)
    }
    return (
        <>
            <div className="w-screen h-24 flex justify-center items-center gap-5">
                <input type="text" className="h-12 w-[500px] rounded-md box-border px-10 outline-none" placeholder="Enter city name..." onChange={onchangeHandler}/>
                <button className="w-24 h-12 bg-blue-900 text-white rounded-lg" onClick={onclickHandler}>Search</button>
            </div>
        </>
    )
}

export default Input