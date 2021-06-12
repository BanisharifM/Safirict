import BreadCrumbs from "components/Global/BreadCrumbs";
import AboutParallax from "components/Global/ContactParallax";
import CardWithImage from "components/Global/WideCard";
import React from "react";

const index = () => {
  return (
    <section className="page">
      <BreadCrumbs />
      <div className="page-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <CardWithImage url="/images/photos/about/about1.jpg">
                <h2>معرفی شرکت</h2>
                <p style={{ textAlign: "justify", textJustify: "inter-word" }}>
                  شرکت سفیر ارتباطات هزاره سوم با سابقه درخشان و موفق در زمینه
                  راه‌اندازی زیرساخت شبکه و توسعه‌وب، هم اکنون آماده‌ی انجام
                  پروژه‌های مختلف و عملی کردن رویاهای شماست. ما در سفیر ارتباطات
                  همواره تلاش کرده‌ایم مشتری را جزوی از تیم خود بدانیم و منافع
                  مشتری را منافع خود بدانیم.‎
                </p>
              </CardWithImage>
            </div>
          </div>
        </div>
        {/* <AboutParallax /> */}
        {/* <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <CardWithImage
                url="/images/photos/about/contact.jpg"
                isLeft
                className="margin-bottom-30"
              >
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
        </div> */}
      </div>
    </section>
  );
};

export default index;
