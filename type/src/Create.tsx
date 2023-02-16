import React,{useState} from 'react'



export const GuestList: React.FC = () => {  
    const [name, setName] = useState("")
    const [guest, setGuest] = useState<string[]>([])

    const HandleUser = () => {
     setName("")
     setGuest([...guest, name])

    }
  
    return (<>

    <h1>Testing My code here</h1>
    <input  value={name}  onChange={(e) => 
     setName(e.target.value)} />

    <ul>
        {guest && guest.map((guet) => (<li key={guet} >
          {guet}
        </li>)) }
    </ul>

    <button  onClick={HandleUser} >Click here now</button>
    
    </>)

}