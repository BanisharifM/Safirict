import React from "react";
import SectionButton from "./SectionButton";

const Voip = () => {
  return (
    <section className="section padding-bottom-80" id="our-team">
      <div id="fh2" className="container">
        <div className="row">
          <div
            className="col-lg-5 col-md-12 col-sm-12 align-self-center mobile-bottom-fix-big"
            data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
            data-scroll-reveal-id="6"
            data-scroll-reveal-initialized="true"
            data-scroll-reveal-complete="true"
          >
            <img
              src="/images/photos/features/voip.jpg"
              className="img-fluid d-block mx-auto"
              alt="App"
            />
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-bottom-fix">
            <div className="left-heading">
              <h2 className="section-title">راه اندازی VOIP</h2>
            </div>
            <div className="left-text">
              <p>
                این مجموعه با بهره گیری از کادری متخصص و پیشرو در تکنولوژی های
                روز دنیا،امکان راه حل های متنوع در زمینه انتقال صوت وتصویر را
                فراهم میکند. سیستم ارتباطی voice over IP که به اختصار آن را
                voipمی نامند به معنی انتقال صدا روی بستر شبکه است.voipیکی از
                خدمات این مجموعه است. با توجه به ظهور نسل جدید سامانه های
                ارتباطی و امکانات بسیار وسیع این سامانه ها و نیز افزایش بهره وری
                که برای کاربران به ارمغان آوردند، بسیاری از افراد در مشاغل مختلف
                تصمیم گرفتند که از این فناوری ها استفاده نمایند. برای راه اندازی
                این سامانه ها، نیاز به تخصص و مهارت بالایی است که از عهده ی
                کاربران عادی خارج است. اهمیت این موضوع ما را بر آن داشت که نکاتی
                را در خصوص راه اندازی voip و ابزار مورد نیاز آن به شما کاربران
                گرامی ارائه می دهیم. امیدواریم که از موارد عنوان شده نهایت
                استفاده را ببرید
              </p>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <SectionButton>مرکز تلفن تحت شبکه</SectionButton>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <SectionButton>VOIP Getway</SectionButton>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <SectionButton>
                    تلفن ip،تلفن نرم افزاری و یا مبدل voip
                  </SectionButton>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <SectionButton>مشکلات موجود در راه اندازی</SectionButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Voip;
