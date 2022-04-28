import FooterMovil from "./footer/footerMovil";
import NavBar from "./header/header";
import People from "./informationPeople/containerPeople";

import "./homePage.css"
import Footer from "./footer/footer/footer";

function HomePage(){
  return(
    <div>
      <NavBar/>
      <div className="container-mission">
        <h2>Our Mission</h2>
        <p>Founded in 2014, Achoo believes that influencers including bloggers, are the best digital marketing channel. We help advertisers to engage and execute efficient influencer marketing strategies. Our digital platform whit turnkey analytics and reporting features based on real-time influencer data provided advertisers overview and transparency into the vastly unstructured influencer market.</p>
      </div>
      <People/>
      <FooterMovil/>
      <Footer/>
    </div> 
  )
}

export default HomePage