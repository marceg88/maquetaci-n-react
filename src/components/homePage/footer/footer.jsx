import ButtonStartFree from "../buttonStart/buttonStartFree"
import "./footer.css"

function Footer(){
  return(
    <div className="footer-container">
      <p>No obligations or contacts. Achoo Influencer Plataform is available to all advertisers</p>
      <div className="button-margin">
        <ButtonStartFree classButton="transparent"/>
      </div>
      
    </div>
  )
}

export default Footer