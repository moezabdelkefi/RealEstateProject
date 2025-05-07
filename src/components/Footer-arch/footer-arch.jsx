/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useTranslation } from "react-i18next";

const FooterArch = () => {
  const { t } = useTranslation();

  return (
    <>
      <footer className="sub-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="item md-mb50">
                <div className="title">
                  <div className="logo">
                    <img src={"/avatar.png"} alt={t("footer.logoAlt")} />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="item">
                <div className="copy-right">
                  <p>
                    {t("footer.rights")}{" "}
                    <a href="#0" className="main-color">
                      {t("footer.poweredBy")}
                    </a>
                    .
                  </p>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <p style={{ margin: 0 }}>{t("footer.terms")}</p>
                    <p style={{ margin: 0 }}>{t("footer.privacy")}</p>
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