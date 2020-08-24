import CardWithImage from "components/Global/CardWithImage";
import AboutParallax from "components/about/AboutParallax";
import BreadCrumbs from "components/Global/BreadCrumbs";
import React from "react";

const index = () => {
  return (
    <section className="page">
      <BreadCrumbs />
      <div className="page-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <CardWithImage url="/images/photos/about/1.jpg">
                <h2>لورم ایپسوم</h2>
                <p>
                  لورم ایپسوم یا طرح‌ نما به متنی آزمایشی و بی‌معنی در صنعت چاپ،
                  صفحه‌آرایی و طراحی گرافیک گفته می‌شود.لورم ایپسوم یا طرح‌ نما
                  به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی
                  گرافیک گفته می‌شود.
                </p>
                <p>
                  لورم ایپسوم یا طرح‌ نما به متنی آزمایشی و بی‌معنی در صنعت چاپ،
                  صفحه‌آرایی و طراحی گرافیک گفته می‌شود.لورم ایپسوم یا طرح‌ نما
                  به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی
                  گرافیک گفته می‌شود.
                </p>
              </CardWithImage>
            </div>
          </div>
        </div>
        <AboutParallax />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <CardWithImage url="/images/photos/about/2.jpg" isLeft className='margin-bottom-30'>
                <h2>لورم ایپسوم</h2>
                <p>
                  لورم ایپسوم یا طرح‌ نما به متنی آزمایشی و بی‌معنی در صنعت چاپ،
                  صفحه‌آرایی و طراحی گرافیک گفته می‌شود.لورم ایپسوم یا طرح‌ نما
                  به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی
                  گرافیک گفته می‌شود.
                </p>
                <p>
                  لورم ایپسوم یا طرح‌ نما به متنی آزمایشی و بی‌معنی در صنعت چاپ،
                  صفحه‌آرایی و طراحی گرافیک گفته می‌شود.لورم ایپسوم یا طرح‌ نما
                  به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی
                  گرافیک گفته می‌شود.
                </p>
              </CardWithImage>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
