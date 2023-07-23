import React from "react";
import Linkedin from "../../assets/images/Linkedin.png"
import Twitter from "../../assets/images/Twitter.png"
import Dribble from "../../assets/images/Dribble.png"

export default function SingleItem(props) {
  return (
    <div className="card">
      <img className="product--image" src={props.url} alt="product image" />
      <h4>{props.name}</h4>
      <p className="jobtitle">{props.jobtitle}</p>
      <p>{props.description}</p>
      <div className="socialIcons">
          <img src={Linkedin} />
          <img src={Twitter} />
          <img src={Dribble} />

      </div>
     
    </div>
  );
}