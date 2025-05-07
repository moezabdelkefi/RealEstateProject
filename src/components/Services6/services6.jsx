import React from "react";
import { useTranslation } from "react-i18next";

const Services6 = () => {
  const { t, i18n } = useTranslation();

  // Check if the current language is Arabic
  const isArabic = i18n.language === "ar";

  return (
    <section
      className={`about-us section-padding ${isArabic ? "rtl" : ""}`}
      id="about"
    >
      <div className="container">
        <div className="row">
          <div
            className={`col-lg-6 valign md-mb50 ${
              isArabic ? "order-lg-2" : ""
            }`}
          >
            <div className="mb-50">
              <h3 className="fw-600 text-u ls1 mb-30 color-font">
                {t("services6.title")}
              </h3>
              <p>{t("services6.content.paragraph1")}</p>
              <p>{t("services6.content.paragraph2")}</p>
              <p>{t("services6.content.paragraph3")}</p>
              <p>{t("services6.content.paragraph4")}</p>
              <p>{t("services6.content.paragraph5")}</p>
            </div>
          </div>
          <div className={`col-lg-6 ${isArabic ? "order-lg-1" : ""}`}>
            <img src={"/img/serv.png"} alt="" />
          </div>
        </div>
      </div>
      <style>{`
          .rtl {
            direction: rtl;
            text-align: right;
          }

          .rtl .order-lg-1 {
            order: 1;
          }

          .rtl .order-lg-2 {
            order: 2;
          }
             `}</style>
    </section>
  );
};

export default Services6;
