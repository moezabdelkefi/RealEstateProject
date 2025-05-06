/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import AboutUs1Date from "../../data/sections/about-us1.json";

const Services6 = () => {
  return (
    <section className="about-us section-padding" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 valign md-mb50">
            <div className="mb-50">
              <h3 className="fw-600 text-u ls1 mb-30 color-font">
                Why A Free Consultation With Elegant Oryx?
              </h3>
              <p>
                Our experts have been specializing in real estate investment and
                the property market in Dubai for years, providing you with
                tailor-made consultations based on your needs in property
                purchasing, ensuring you get the most suitable solutions that
                yield significant investment returns.
              </p>
            </div>
          </div>
          <div className="col-lg-7 img">
            <img src={AboutUs1Date.image} alt="" />
            <div className="stauts">
              {AboutUs1Date.stauts.map((item) => (
                <div className="item" key={item.id}>
                  <h4>
                    {item.number}
                    <span>{item.letter}</span>
                  </h4>
                  <h6>{item.stautsName}</h6>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services6;
