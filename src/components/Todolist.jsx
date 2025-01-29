import { useState } from "react"
import Todoitem from "./Todoitem"

function Todolist(props) {

    const actarr = props.actarr
    const setActarr = props.setActarr
    return (
        <>
            <div className="bg-[#bdb4ea] border-none rounded-md p-4 flex-grow">
                <h1 className="text-2xl font-medium ">Today's Activity</h1>
               
                {actarr.length==0? <p>You haven't added any activity</p>: ""}
                {
                    actarr.map((data,index)=>{
                        return <Todoitem index={index} act={data.act} id={data.id} actarr={actarr} setActarr={setActarr}/>
                    })
                }
            </div>
        </>
    )
}

export default Todolist