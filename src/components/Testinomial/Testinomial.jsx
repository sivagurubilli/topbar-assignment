import React from "react";
import stars from "../../assets/images/stars.png";
import avatar1 from "../../assets/images/avatar1.png";
import truptismall from "../../assets/images/truptismall.png";
import "./Testinomial.scss";

const Testinomial = () => {
  return (
    <div className="testinomial">
      <img src={stars} />
      <p>
        A customer testimonial that highlights features
        <br />
        and answers potential customer doubts about your product or
        <br />
        service. Showcase testimonials from a similar
        <br />
        demographic to your customers.
      </p>

      <div className="testinomial-bottom">
        <div className="testinomial-left">
          <div>
            <img src={avatar1} />
          </div>
          <div className="names">
            <h3>Name Surname</h3>
            <p>position, company name</p>
          </div>
        </div>
        <div className="divider"></div>
        <div className="testinomial-right">
          <img src={truptismall} />
        </div>
      </div>
    </div>
  );
};

export default Testinomial;
