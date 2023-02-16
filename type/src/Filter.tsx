import React,{useState} from 'react'

const users =[
 {name:"felipe", age:25},
 {name:"sarah", age:27},
 {name:"felipe programmer", age:28},

]


export const  SearchCode = () => {

    const [name, setName] = useState<string|number>()    
    const[ testing, setTesting] = useState <{name:string, age:number}| 
     undefined> ()

    const getDates = () => {
      const FoundUser = users.find((user) => {
        return user.name === name 
      })   
       setTesting(FoundUser)
    }  


    return (<> 
     <h1>code here now</h1>
     <input value={name} onChange={e =>  setName(e.target.value)} />
     { testing && (<>
     {testing.name}
     {testing.age}
     </>) }
     <button onClick={getDates} >Search for me</button>
    
    </>)



}