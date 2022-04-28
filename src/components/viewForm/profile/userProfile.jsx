import CardInformationUser from "./componentsProfile/cardInformationUser";
import CardReportViews from "./componentsProfile/reportsUser/cardReportViews";
import { ArrowRight } from 'react-bootstrap-icons';
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../../store/userSlice";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./userProfile.css"

function UserProfile(){
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(selectUser)
  
  return(
    <div className="cotainer-profile">
      <div className="button-logout">
      {user?
      <div className="icon-logout">
        <button onClick={() => dispatch(logout())}><Link to="/">logout</Link></button>
      
      </div>
      :
      <div className="icon-logout">
        <button onClick="#">logout</button>
      
      </div>
      }
      </div>
      <div className="container-inf-reports">
      <CardInformationUser/>
      <CardReportViews/>
      </div>
      
    </div>
  )
}

export default UserProfile