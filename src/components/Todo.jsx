import Addtodoform from "./Addtodoform"
import Todolist from "./Todolist"
import { useState } from "react"

function Todo() {
    const [actarr, setActarr] = useState([
        { id: 1, act: "Wake Up at 6 am" },
        { id: 2, act: "Go for a Walk" },
        { id: 3, act: "Eat Fruits" },
    ])
    return (
        <>
            <div className=" flex flex-wrap gap-5" >

                <Addtodoform  actarr={actarr} setActarr={setActarr} />
                <Todolist actarr={actarr} setActarr={setActarr}/>
            </div>


        </>
    )
}

export default Todo