import React from "react";
import SupportItems from "./SectionButton";

const SupportAndMaintain = () => {
  return (
    <section className="section padding-bottom-80 colored" id="features">
      <div id="fh1" className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-bottom-fix">
            <div className="left-heading">
              <h2 className="section-title">
                پشتیبانی و نگه داری شبکه های کامپیوتری
              </h2>
            </div>
            <div className="left-text">
              <p>
                این بخش در راستای ارائه خدمات منحصر به فرد، به موقع و با کیفیت
                به عنوان مجری خدمات پس از فروش کلیه محصولات عرضه شده در واحدهای
                فروش و با بهره گیری از بروز ترین تجهیزات و با تکیه بر دانش فنی
                کارشناسان مجرب، در تمامی مراحل پاسخگوی نیاز مشتریان در جهت رفع
                مشکلات احتمالی محصولات به روش های مختلف می باشد
              </p>
              {/* <!--                        <p>Phasellus vitae velit sit amet diam semper commodo quis quis libero. Morbi consequat arcu augue, molestie faucibus metus ullamcorper vel.</p>--> */}
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <SupportItems>ارائه مستندات و گزارشات</SupportItems>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <SupportItems>آنالیز و عیب یابی شبکه</SupportItems>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <SupportItems>بهینه سازی شبکه</SupportItems>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <SupportItems>نیروی جوان و خلاق</SupportItems>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-1"></div>
          <div
            className="col-lg-5 col-md-12 col-sm-12 align-self-center mobile-bottom-fix"
            data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
            data-scroll-reveal-id="5"
            data-scroll-reveal-initialized="true"
            data-scroll-reveal-complete="true"
          >
            <img
              src="/images/photos/features/blue-4.jpg"
              className="img-fluid d-block mx-auto"
              alt="App"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportAndMaintain;
