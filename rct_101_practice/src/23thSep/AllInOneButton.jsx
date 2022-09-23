import React from 'react'
import { Buttons } from './Buttons'

export const AllInOneButton = () => {
    let buttons=[
        {name:"Download"},
        {name:"Search"},
        {name:"Login"},
        {name:"Help"},
        {name:"Settings"},
        {name:"Home"},
        {name:"Join us"},
        {name:"Contact us"}
    ]
  return (
    <div>
    {buttons.map((button,index)=>{
        return <Buttons {...button}  key={index}/>
    })}
    </div>
  )
}
