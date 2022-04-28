import CardInformationUser from "./componentsProfile/cardInformationUser";
import CardReportViews from "./componentsProfile/reportsUser/cardReportViews";
import { ArrowRight } from 'react-bootstrap-icons';
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../../store/userSlice";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";


function UserProfile(){
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(selectUser)
  // useEffect(() => {
  //   navigate("/")
  // }, [dispatch])
  
  return(
    <div>
      {user?
      <div className="icon-logout">
        <button onClick={() => dispatch(logout())}><Link to="/">logout</Link></button>
      <ArrowRight />
      </div>
      :
      <div className="icon-logout">
        <button onClick="#">logout</button>
      <ArrowRight />
      </div>
      }
      <CardInformationUser/>
      <CardReportViews/>
    </div>
  )
}

export default UserProfile