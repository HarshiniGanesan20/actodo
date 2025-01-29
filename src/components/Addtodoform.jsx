import { useState } from "react"
function Addtodoform(props) {

    const actarr = props.actarr
    const setActarr = props.setActarr

    const [input, setInput] = useState("")
    const handleInput = (e) => {
        setInput(e.target.value)
    }

    const handleAdd = () => {
        setActarr([...actarr, { id: actarr.length + 1, act: input }]);
        setInput("");
    }
    return (
        <>
            <div className="flex flex-col gap-3" >
                <h1 className=" text-2xl font-medium">Manage Activities</h1>

                <div>
                    <input value={input} onChange={handleInput} className="bg-white mt-2 p-2 border border-black " placeholder="Next Activity?"></input>
                    <button onClick={handleAdd} className="bg-black border border-black text-white p-2 cursor-pointer">Add</button>
                </div>
            </div>
        </>
    )
}
export default Addtodoform