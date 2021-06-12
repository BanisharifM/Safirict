import React from "react";
import ProjectCardItem from "./ProjectCardItem";

const OurProjects = () => {
  return (
    <section className="section colored padding-bottom-80" id="pricing-plans">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="center-heading">
              <h2 className="section-title">پروژه‌های بخش طراحی وبسایت</h2>
            </div>
          </div>
          <div className="offset-lg-3 col-lg-6">
            <div className="center-text"></div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <ProjectCardItem title="شعر و گنج" index={1}>
              پروژه شعر و گنج با هدف پیوند هنرمندان ایرانی و مردم به یکدیگر و
              برای شاعر نامی کشور یعنی «محمدرضا نظری» توسعه یافت. این پروژه شامل
              یک وب‌سایت لندینگ، یک پنل مدیرتی فانتزی است که هر دو با تکنولوژی
              ری‌اَکت توسعه داده شده اند و در کنار آنها یک اپلیکیشن موبایل نیز
              توسعه داده شده است که کاربر بتواند به کمک آن به اشعار مورد نظر
              خودش دست پیدا کند و همچنین بتواند با دعوت از دوستان خود کسب درآمد
              کند.‎
            </ProjectCardItem>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <ProjectCardItem title="دیجی‌پای" index={2} active>
              پروژه دیجی‌پای یک استارتاپ نوظهور است که با هدف ایستادن در کنار
              کسب‌و‌کار‌های بزرگ عرصه محتوای آنالیزشده توسعه داده شد. این پروژه
              تنها شامل یک پنل با تکنولوژی ری‌اَکت برای کاربران و مدیران است تا
              بدین‌وسیله ارزیابان و سرارزیابان بتوانند ثبت‌نام کرده و پس از
              تایید مدیر سایت به بررسی و ارزیابی محتوای مد نظر مدیران بپردازند.
              در فاز بعدی پروژه قرار است محتوای ارزیابی‌شده در قالب یک وب‌سایت
              لندینگ به کاربران عرضه شود.‎
            </ProjectCardItem>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <ProjectCardItem title="ویکی فود" index={3}>
              پروژه ویکی‌فود، یک بانک جامع شرکت‌ها و اطلاعات در حوزه صنایع غذایی
              است که با هدف ارائه‌ی انواع خدمات اعم از آموزشی، بازرگانی، ثبتی و
              دانشگاهی توسعه داده شده است. این پروژه شامل یک وب‌سایت لندینگ و یک
              پنل برای کاربران و مدیران است که بخش لندینگ با تکنولوژی نِکست و
              بخش پنل با تکنولوژی ری‌اَکت توسعه داده شده اند. مخاطب هدف این سایت
              دانشجویان، شرکت‌ها، متخصصین و کلیه افرادی اند که در این حوزه
              فعالیت می‌کنند.‎
            </ProjectCardItem>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProjects;
