/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import AboutUs1Date from "../../data/sections/about-us1.json";

const Services6 = () => {
  return (
    <section className="about-us section-padding" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 valign md-mb50">
            <div className="mb-50">
              <h3 className="fw-600 text-u ls1 mb-30 color-font">
                Why A Free Consultation With Dragon Eye?
              </h3>
              <p>
                - Our experts have been specializing in real estate investment
                and the property market in Dubai for years, providing you with
                tailor-made consultations based on your needs in property
                purchasing, ensuring you get the most suitable solutions that
                yield significant investment returns.
              </p>
              <p>- Enjoy the consultation from your home.</p>
              <p>
                - The consultation is free and online, right from the comfort of
                your home. All you need to do is provide your email, and we’ll
                send you a link to join the consultation with one of our top
                experts in the Dubai real estate market. They’ll discuss your
                investment goals with you and recommend the best options.
              </p>
              <p>- Answers to all your questions.</p>
              <p>
                - What are the latest projects? When is the best time to buy?
                What are the new investment opportunities? What legal procedures
                are required to purchase property in Dubai? All these questions
                and more will be answered in the free consultation to help you
                make a successful investment decision.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <img src={"/img/serv.png"} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services6;
