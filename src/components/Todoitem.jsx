function Todoitem(props) {
    const actarr = props.actarr
    const setActarr = props.setActarr
    
    const handledelete = (deleteid) =>
    {
        var temparr = actarr.filter((data)=>
        {
            if(data.id == deleteid)
            {
                return false
            }
            else 
            {
                return true
            }
        })
        setActarr(temparr)

    }

    return (
        <>
            <div className="flex justify-between" >
                <p className="my-0.5">{props.index + 1} . {props.act}</p> 
                <button className="cursor-pointer"  onClick={()=> handledelete(props.id)}><i class="fa-solid fa-trash-can  text-red-700"></i></button>
            </div>
        </>
    )

}
export default Todoitem