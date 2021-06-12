import Card from "components/Global/Card";
import React from "react";
import { fakeNews } from "utils/constants";

const News = () => {
  return (
    <section className="section white padding-bottom-80" id="blog">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="center-heading">
              <h2 className="section-title">اخرین اخبار و اطلاعیه ها</h2>
            </div>
          </div>
          <div className="offset-lg-3 col-lg-6">
            <div className="center-text">
              <p>اخبار روز تکنولوژی را با ما دنبال کنید</p>
            </div>
          </div>
        </div>
        <div className="blog-list">
          <div className="row">
            {fakeNews.slice(0,3).map((item, index) => {
              return (
                <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                  <Card {...item} type="news" />
                </div>
              );
            })}
          </div>
        </div>

        {/* <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Newsitem
              title="مایکروسافت ۶ دامنه فیشینگ مرتبط با هکرهای روسی را از کار انداخت"
              url="/images/photos/blog/1.jpg"
            >
              به‌نظر می‌رسد روسیه کماکان درصدد نفوذ و دخالت در انتخابات ایالات
              متحده است. مایکروسافت روز سه‌شنبه اعلام کرد ۶ دامنه‌ی فیشینگ را که
              متعلق به هکرهای دولت روسیه بودند، توقیف کرده است. این دامنه‌ها که
              توسط GRU، اداره‌ی اصلی اطلاعات روسیه ثبت شدند؛ بنا به گزارش‌ها،
              ایمیل‌های کارزار انتخاباتی کلینتون را در سال ۲۰۱۶ ربوده و افشا
              کرده بودند.
            </Newsitem>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Newsitem
              title="همه چیز درباره رویداد شهریور‌ماه اپل"
              url="/images/photos/blog/2.jpg"
            >
              به دلایل نامشخص اپل زمان برگزاری رویدادش را از مدتها قبل مشخص
              نمی‌کند و همواره شایعاتی درباره زمان آن به وجود می‌آید. با این حال
              اپل خیلی هم مقید به مخفی نگه داشتن این زمان نیست چون از آیفون ۵ به
              بعد آیفون‌های جدید اپل در رویدادهایی معرفی کرده که در اولین یا
              دومین سه شنبه ماه سپتامبر برگزار شده اند.
            </Newsitem>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Newsitem
              title="قابلیت‌های سرویس جدید جیمیل"
              url="/images/photos/blog/3.jpg"
            >
              تیم توسعه جیمیل ، چندی پیش از یک آپدیت جدید و جذاب برای این سرویس
              اطلاع داد و حال این آپدیت در دسترس کاربران قرار خواهد گرفت. در
              ادامه با ما همراه باشید تا ​قابلیت‌های سرویس جدید جیمیل را بیشتر
              بشناسید. نسخه جدید سرویس جیمیل با چندین ویژگی جدید منتشر شد و به
              مرور در دسترس تمام کاربران قرار خواهد گرفت؛ در ادامه می‌توانید با
              بعضی از این ویژگی ها آشنا شوید.
            </Newsitem>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default News;
