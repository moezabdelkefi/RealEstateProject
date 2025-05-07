/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useTranslation } from "react-i18next";

const WorksStyle5 = () => {
  const { t, i18n } = useTranslation();

  // Check if the current language is Arabic
  const isArabic = i18n.language === "ar";

  return (
    <section className="agency section-padding position-re" id="How it works">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img src={"/img/serv2.png"} alt="" />
          </div>
          <div className={`col-lg-6 valign ${isArabic ? "rtl" : ""}`}>
            <div className="content">
              <h4 className="wow words chars color-font" data-splitting>
                {t("worksStyle5.title")}
              </h4>

              <p className="wow txt words chars" data-splitting>
                <strong>{t("worksStyle5.step1.title")}</strong> <br />
                {t("worksStyle5.step1.description")}
              </p>
              <p className="wow txt words chars" data-splitting>
                <strong>{t("worksStyle5.step2.title")}</strong> <br />
                {t("worksStyle5.step2.description")}
              </p>
              <p className="wow txt words chars" data-splitting>
                <strong>{t("worksStyle5.step3.title")}</strong> <br />
                {t("worksStyle5.step3.description")}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="line bottom right"></div>
      <style>{`
          .rtl {
            direction: rtl;
            text-align: right;
          }
      `}</style>
    </section>
  );
};

export default WorksStyle5;