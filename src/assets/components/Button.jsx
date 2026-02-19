export default function Button(props) {
  return (
      <button 
          className={`btn ${props.visibility?"btn-warning" :"btn-primary" }`}
          onClick={props.changeVisibility}>
      {props.language.title}
      </button>
  )
}



