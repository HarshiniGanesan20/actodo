
import Header from "./Header";
import Card from './Card'
import Todo from './Todo'


function Activity() {

  return (
    <>
      
      <div className='bg-black p-16'>
        <div className='bg-[#EFEFEF] p-10 border rounded-md'> 
      {/* Header */}
      <Header />

      {/* Card */}
      <div className="flex flex-wrap justify-between gap-7 my-5">
            <Card bgclr={"#8272DA"} title={"8°C"} subtitle={"London"} />
            <Card bgclr={"#FC6662"} title={"December"} subtitle={"4.40.10"} />
            <Card bgclr={"#FCA301"} title={"Build Using"} subtitle={"React"} />
          </div>

      {/* ToDo */}
       <Todo/>
        </div>
      </div>
    </>
  )
}

export default Activity
