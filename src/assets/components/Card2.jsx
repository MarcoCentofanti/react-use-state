import { useState } from "react";
import Button from "./Button";
import Description from "./Description";

export default function Card({ title, description }) {
  const [visibility, setVisibility] = useState(false)

    const changeVisibility = () => setVisibility(!visibility)

  return (
    <div className="p-5 border">
      <Button 
        visibility={visibility}
        title={title}
        changeVisibility={changeVisibility}
        > 
      </Button>
      {visibility && <Description description ={description}/> 
      }
    </div>
      
  )
}
