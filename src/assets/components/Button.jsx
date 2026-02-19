export default function Button({visibility, title, changeVisibility}) {
  return (
      <button 
          className={`btn ${visibility?"btn-warning" :"btn-primary" }`}
          onClick={changeVisibility}>
      {title}
      </button>
  )
}



