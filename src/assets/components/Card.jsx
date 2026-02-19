import { useState } from "react";

export default function Card({ language }) {
  const [visibility, setVisibility] = useState(false)
  return (
    <div className="p-5 border">
      <button className={`btn ${visibility?"btn-warning" :"btn-primary" }`}
          onClick={() => setVisibility(!visibility)}>
            {language.title}
      </button>
      {visibility &&<div className="mt-3">{language.description}</div>
}
    </div>
      
  )
}
