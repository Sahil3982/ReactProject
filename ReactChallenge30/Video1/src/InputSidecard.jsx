import { useState } from "react"

const InputSidecard = ({ data, setData }) => {

    const handleinput = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
    }

    return (
        <div>
            <label>
                Title
            </label>
            <br />
            <input 
            name="title"
            onChange={handleinput}>

            </input>
            <br />
            <label>
                Category
            </label>
            <br />
            <input 
            name="category"
            onChange={handleinput}>

            </input>
            <br />
            <label>
                Amount
            </label>
            <br />
            <input
                name="amount"
                onChange={handleinput}>

            </input>
            <br />
            <button style={{ padding: "10px", margin: "20px" }}>
                Add
            </button>
        </div>
    )
}

export default InputSidecard