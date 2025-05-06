/* eslint-disable @next/next/no-img-element */
import React from "react";
import appData from "../../data/app.json";

const FooterArch = () => {
  return (
    <>
      <footer className="sub-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="item md-mb50">
                <div className="title">
                  <div className="logo">
                    <img src={"/img/logo-light.JPG"} alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="item">
                <div className="copy-right">
                  <p>
                    2025 All Rights Reserved.{" "}
                    <a href="#0" className="main-color">
                      Powered by BadfiTech
                    </a>
                    .
                  </p>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <p style={{ margin: 0 }}>Terms and Conditions</p>
                    <p style={{ margin: 0 }}>Privacy Policy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        .copy-right a {
          text-decoration: none;
        }
      `}</style>
    </>
  );
};

export default FooterArch;
