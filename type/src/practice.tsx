import React from 'react'


export interface Test {
    name:string
    age: number
    email:string 
    onClick: () => void;
    children?: React.ReactNode 
}



export const Father = ({name, age, email,onClick}:Test) => {
   
    
   return(<>

   <h1>Hi, my name is {name} I'm{age} my {email} </h1>
   
   <button onClick={onClick} >Click here bro</button>
   
   </>)
}


export const SonOne: React.FC<Test> = ({name,age,email ,onClick}) => {
    
    return(<>
    <h1>Testing more {name} {age} {email} </h1>
    <button onClick={onClick} >Click more one time</button>
    
    </>)
}