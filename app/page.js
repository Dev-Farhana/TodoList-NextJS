"use client"
import React, { useState } from "react";
const page = () => {
  const [ title, settitle ] = useState ("")
  const [ desc, setdesc ] = useState ("")
  const [mainTask, setMainTask] = useState([])
  const submitHand = (e) =>{
    e.preventDefault()
    setMainTask([...mainTask, {title,desc}]);
    console.log("submit hogaya");
    console.log(title);
    console.log(mainTask);
    settitle("")
    setdesc("")
  }

  const deleteHandler = (i) => {
    let copyTask = [...mainTask]
    copyTask.splice(i,1);
    setMainTask(copyTask)

  }

  let renderTask = <h2>  NoTask Available  </h2>
 if(mainTask.length >0){
  renderTask = mainTask.map((t,i) => {
    return (
      <li key={i} className="flex items-center justify-between mb-5">
        <div className="w-2/3"> 
          <h4 className="text-xl font-semibold"> {t.title} </h4>
          <h5 className="font-medium font-semibold"> {t.desc} </h5>
        </div>
        <button onClick={deleteHandler}
         className="bg-red-500 text-white rounded font-bold px-4 py-2"> Delete </button>
      </li>
    );
  });
 }
  
  
  return (
    <div> 
      <>
      <h1 className="bg-black text-white p-5 text-5xl font-bold text-center"> MY ToDo App</h1>
      <form onSubmit={submitHand}> 
        <input type="text" placeholder="Enter task here.." className="text-2xl border-zinc-800 border-8 m-8 px-4 py-2" 
        value={title}
        onChange={(e) => {
          settitle(e.target.value)
        }}
        /> 

        <input type="text" placeholder="Enter Description.." className="text-2xl border-zinc-800 border-8 m-8 px-4 py-2" 
        value={desc}
        onChange={ (e) => {
          setdesc(e.target.value)
        }} 
        /> 
        <button className="bg-black text-white px-5 py-2 text-2xl font-bold rounded m-5"> Add Task. </button>

      </form>    
      <hr/> 

      <div className="p-8 bg-slate-200"> 
        <ul> 
          {renderTask}
        </ul>
      </div>
      </>

    </div>

  )
}
export default page