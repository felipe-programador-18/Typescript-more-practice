import React, { ChangeEvent, 
    DragEventHandler,
    useEffect, 
    useRef } from 'react'

const EventComponent: React.FC = () => {
    const myReffer = useRef <HTMLInputElement|null> (null)
    
    useEffect(() => {
        if(!myReffer.current){
            return;
        }
        myReffer.current?.focus()
    },[])
    
    const onChange = (e:ChangeEvent<HTMLInputElement> ) => {
     console.log(e)
    } 

    const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
        console.log(event)

    }

    return (<>
    <input ref={myReffer} onChange={onChange}  />
    <div draggable onDragStart={onDragStart} >
        drag here now !!
    </div>
    
    </>)
}

export default EventComponent