import { useState } from "react";
import Button from "./Button";
import Description from "./Description";

export default function Card({ language }) {
  const [visibility, setVisibility] = useState(false)

    const changeVisibility = () => setVisibility(!visibility)

  return (
    <div className="p-5 border">
      <Button 
        visibility={visibility}
        language={language}
        changeVisibility={changeVisibility}
        > 
      </Button>
      {visibility && <Description language ={language}/> 
      }
    </div>
      
  )
}
