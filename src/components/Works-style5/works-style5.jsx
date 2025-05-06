/* eslint-disable @next/next/no-img-element */
import React from "react";
import Split from "../Split";
import AboutUs3date from "../../data/sections/about-us3.json";
import { Link } from "react-scroll";

const WorksStyle5 = () => {
  return (
    <section className="agency section-padding position-re" id="How it works">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img src={"/img/serv2.png"} alt="" />
          </div>
          <div className="col-lg-6 valign">
            <div className="content">
              <h4 className="wow words chars color-font" data-splitting>
                How it works
              </h4>

              <p className="wow txt words chars" data-splitting>
                1. Book your appointment: <br />
                - Enter your details on this page and choose the convenient time
                for you to conduct the free real estate consultation.
              </p>
              <p className="wow txt words chars" data-splitting>
                2. We will keep in touch: <br />
                - We will send you a confirmation message with the consultation
                link, and we will remind you sufficiently before the
                appointment. During the consultation, one of our experts will
                contact you to discuss your goals, answer your questions, and
                provide suggestions that suit you.
              </p>

              <p className="wow txt words chars" data-splitting>
                3. Define your goals: <br />
                - It is preferable to define your goal in real estate investment,
                whether you are looking for a property for residence or
                investment to achieve profits.
                <p>- It is also advisable to specify your available budget to help our experts choose the best properties that suit you.</p>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="line bottom right"></div>
    </section>
  );
};

export default WorksStyle5;
