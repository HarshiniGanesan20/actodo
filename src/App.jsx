import './App.css'
import Header from './components/Header'
import Card from './components/Card'
import Todo from './components/Todo'
import Signup from './components/Signup'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login'
import { useState } from "react";
import Activity from './components/Activity'

function App() {
   const [users, setUsers] = useState([{ user: "hasi", pwd:"123" }])

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login users={users} setUsers={setUsers}/>}></Route>
          <Route path='/signup' element={<Signup users={users} setUsers={setUsers}/>}></Route>
          <Route path="/activity" element={<Activity />} />
        </Routes>
      </BrowserRouter>
      
      {/* <div className='bg-black p-16'>
        <div className='bg-[#EFEFEF] p-10 border rounded-md'> */}
      {/* Header */}
      {/* <Header /> */}

      {/* Card */}
      {/* <div className="flex flex-wrap justify-between gap-7 my-5">
            <Card bgclr={"#8272DA"} title={"24"} subtitle={"Madurai"} />
            <Card bgclr={"#FC6662"} title={"December"} subtitle={"4.40.10"} />
            <Card bgclr={"#FCA301"} title={"Build Using"} subtitle={"React"} />
          </div> */}

      {/* ToDo */}
      {/* <Todo/>
        </div>
      </div> */}
    </>
  )
}

export default App
