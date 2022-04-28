import CardPeople from "./cardPeople/cardPeople";

import "./containerPeople.css"

function People(){
  const data = [
    {
      id: 1,
      img: "https://i.pinimg.com/564x/e0/6a/f1/e06af1ae7452507cb117d53ab42e6a74.jpg",
      name: "Rasmus D. Nielsen",
      description: "CEO - Founder who makes easy to change and easy to create new elements"
    }, 
    {
      id: 2,
      img: "https://i.pinimg.com/564x/e0/6a/f1/e06af1ae7452507cb117d53ab42e6a74.jpg",
      name: "Rasmus D. Nielsen",
      description: "CEO - Founder who makes easy to change and easy to create new elements"
    },
    {
      id: 3,
      img: "https://i.pinimg.com/564x/e0/6a/f1/e06af1ae7452507cb117d53ab42e6a74.jpg",
      name: "Rasmus D. Nielsen",
      description: "CEO - Founder who makes easy to change and easy to create new elements."
    }
  ]
  return(
    <div className="container-people">
      <div className="container-text">
        <h2>Our People</h2>
        <p>Behind Achoo is a dedicated team of digital marketing experts, client-focused relationship managers, data nerds and bloggers whose ambition is helping clients achieve awesome influencer marketing results.</p>
      </div>
      <div className="container-people-lg">
      {data.map(item => <CardPeople key={item.id}{...item} />)}
      </div>
      
    </div>
    
  )
}

export default People