import "./buttonStartFree.css"

function ButtonStartFree( classButton ){
  console.log(classButton)
  if(classButton === "transparent"){
    return(
      <div className="button-start-transparent">
        <button>start your free trial</button>
      </div>
    )
  } else {
    return(
      <div className="button-start">
        <button>start your free trial</button>
      </div>
    )
  }
  
}

export default ButtonStartFree