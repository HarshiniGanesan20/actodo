import { Link } from "react-router-dom"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup(props) {
    const users = props.users
    const setUsers = props.setUsers
    const navigate = useNavigate()

    const [uinput, setUinput] = useState("")
    const [pinput, setPinput] = useState("")

    const handleUser = (e) => {
        setUinput(e.target.value)
    }

    const handlePwd = (e) => {
        setPinput(e.target.value)
    }

    const handleAdd = () => {
        setUsers([...users, { user: uinput, pwd: pinput }])
        navigate("/")
        console.log("Updated Users:", [...users, { user: uinput, pwd: pinput }]);
        setUinput("")
        setPinput("")       
}

return (
    <>
        <div className='bg-black p-16'>
            <div className='bg-[#EFEFEF] p-10 border rounded-md'>
                <h1 className="text-3xl font-medium">Account Sign Up</h1>
                <p>"I Help You Manage Your Activities :)"</p>

                <div className="flex flex-col gap-2 my-2">
                    <input value={uinput} onChange={handleUser} type="text" className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="Username"></input>
                    <input value={pinput} onChange={handlePwd} type="password" className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="Password"></input>
                    <input type="password" className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="Confirm Password"></input>

                    <button onClick={handleAdd} className="bg-[#FCA201] w-24 p-1 rounded-md ">Sign Up</button>
                    <p>Already having an account? <Link to={"/"} className="underline">Login</Link> </p>
                </div>
            </div>
        </div>
    </>
)
}

export default Signup