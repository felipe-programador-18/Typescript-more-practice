import React, { Children } from 'react'

export interface Children {
    name:string ; 
    nickname:string ;
    age:number;
    children?: React.ReactNode
    onClick: () => void;
}

export const CreateManage = ({name,nickname, age, onClick}:Children) => {
    return (<>
    <h1>My name is {name} and my nickname{nickname}, I'am {age} </h1>

    <button onClick={onClick} >Click here 1</button>
    </>)
}


export const OtherFuntionAsFC: React.FC<Children> = ({name, nickname, age,onClick}) => {

    return (<>
     <h2>Another Value here bro</h2>

       {name} , {nickname}, {age} 
      <button onClick={onClick} >Click Here 2</button>   

    </>)
}