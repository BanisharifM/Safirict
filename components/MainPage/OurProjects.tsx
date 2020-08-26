import React from "react";
import ProjectCardItem from "./ProjectCardItem";

const OurProjects = () => {
  return (
    <section className="section colored padding-bottom-80" id="pricing-plans">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="center-heading">
              <h2 className="section-title">پروژه های شرکت ما</h2>
            </div>
          </div>
          <div className="offset-lg-3 col-lg-6">
            <div className="center-text"></div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <ProjectCardItem title="طراحی امنیتی" index={1}>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد.
            </ProjectCardItem>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <ProjectCardItem title="سیستم کنترل مشتریان" index={2} active>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد.
            </ProjectCardItem>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <ProjectCardItem title="نظارت بر پروژه های بین المللی" index={3}>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد.
            </ProjectCardItem>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProjects;
