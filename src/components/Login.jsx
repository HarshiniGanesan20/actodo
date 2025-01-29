import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"



function Login(props) {
    const users = props.users
    const setUsers = props.setUsers
    const navigate = useNavigate()

    const [uinput, setUinput] = useState()
    const [pinput, setPinput] = useState()
    const [reguser, setReguser] = useState(true)

  
    const handleUser = (e) => {
        setUinput(e.target.value)
    }

    const handlePwd = (e) => {
        setPinput(e.target.value)
    }

    const handleCheck = ()=>
    {
        
         var userfound = false

        users.forEach((data)=>
        {
            if(data.user === uinput && data.pwd === pinput)
            {
                console.log("Login successful")
                userfound = true
                navigate("/activity",{state:{user:uinput}})
                
            }
        })
        if(userfound == false)
        {
            console.log("Login Not successful")
            setReguser(false)
        }
        setUinput("");
        setPinput("");
    }


    return (
        <>
            <div className='bg-black p-16'>
                <div className='bg-[#EFEFEF] p-10 border rounded-md'>
                    <h1 className="text-3xl font-medium">Login</h1>
                    {reguser?<p>"I Help You Manage Your Activities after your login :)"</p> : <p className="text-red-700">"Please Sign Up before login"</p>}
                    

                    <div className="flex flex-col gap-2 my-2">
                        <input onChange={handleUser} type="text" className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="Username"></input>
                        <input onChange={handlePwd} type="password" className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="Password"></input>

                        <button onClick={handleCheck} className="bg-[#8272DA] w-24 p-1 rounded-md ">Login</button>
                        <p>Don't have an account? <Link to={"/signup"} className="underline">Sign Up</Link> </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login