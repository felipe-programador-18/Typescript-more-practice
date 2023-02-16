import React from 'react'



export interface MyAcount {
    name: string
    email:string 
    cellphone:number 
    onClick: () => void;
    children?: React.ReactNode
}


export const ToPracticeMore = ({name, email, cellphone, onClick}:MyAcount ) => {


    return( <>
    <h1>to practice a bit about this</h1>
    <h2>MY name is {name} my cellphone {cellphone}   </h2>    
    <h4>you can send you email{email}</h4>
    <button onClick={onClick} >Click More one time</button>
    </>)

}



export const ToPracticeLeastFC : React.FC <MyAcount> = ({name, email, cellphone, onClick}) => {
    
    return( <>
          
          <h2>To practice more and more {name}  and my email {email} 
          my number to keep it touch {cellphone}
          <button onClick={onClick} >Here button 2</button>
          </h2>
    </> )
}