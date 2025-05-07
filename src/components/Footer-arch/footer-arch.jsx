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
                    <img
                      src={"/avatar.png"}
                      alt={t("footer.logoAlt")}
          
                    />{" "}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="item">
                <div className="copy-right text-center">
                  <p>
                    {t("footer.rights")}{" "}
                    <a
                      href="https://www.badfi.tech/"
                      className="main-color"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t("footer.poweredBy")}
                    </a>
                    .
                  </p>
                  <div className="responsive-center">
                    <p style={{ margin: 0 }}>{t("footer.terms")}</p> -
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

        @media (max-width: 768px) {
          .logo {
            display: flex;
            justify-content: center;
          }

          .responsive-center {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 4px;
          }
            footer .item .logo img {
            width: 150px;}
        }
      `}</style>
    </>
  );
};

export default FooterArch;
