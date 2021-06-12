import React from "react";
import SupportItems from "./SectionButton";

const WebDevelopment = () => {
  return (
    <section className="section padding-bottom-80 colored" id="features">
      <div id="fh1" className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-bottom-fix">
            <div className="left-heading">
              <h2 className="section-title">طراحی وبسایت</h2>
            </div>
            <div className="left-text">
              <p style={{textAlign : 'justify', textJustify:'inter-word'}}>
                این بخش در سال 1399 و با همت جمعی از نخبگان این عرصه راه‌اندازی
                شد. تکنولوژی‌هایی که در این بخش مورد توجه است ری‌اَکت، جنگو و
                وردپرس را در بر می‌گیرد. همچنین پروژه‌هایی که در این بخش توسعه
                داده شده اند همگی با یک طراحی اختصاصی همراه بوده اند که به سایت
                یک هویت مستقل می‌دهد و آن را خاص می‌کند.‎
              </p>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <SupportItems>React</SupportItems>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <SupportItems>Next js</SupportItems>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <SupportItems>Django</SupportItems>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <SupportItems>WordPress</SupportItems>
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
              src="/images/photos/features/webdesign.jpeg"
              className="img-fluid d-block mx-auto"
              alt="App"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDevelopment;
