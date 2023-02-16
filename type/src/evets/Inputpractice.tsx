import React,{ChangeEvent, useState} from 'react'


export const FormIssues = () => {
    const [name, setName] = useState<string>()

    
    const HandleSubmit = (e:ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value)
    }


    return(<>
     
     <input type="text" value={name} onChange={HandleSubmit}  />
     {name}
    
    </>)
}