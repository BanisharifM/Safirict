import BreadCrumbs from "components/Global/BreadCrumbs";
import CardWithImage from "components/Global/WideCard";

const index = () => {
  return (
    <section className="page">
      <BreadCrumbs />
      <div className="page-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <CardWithImage url="/images/photos/about/1.jpg">
                <h2>مشتریان ما</h2>
                <p style={{ textAlign: "justify", textJustify: "inter-word" }}>
                  با توجه به استقبال شرکت نسبت به پروژه‌هایی که دامنه‌های
                  متفاوتی دارند، هم‌اکنون شرکت سفیر ارتباطات با مشتریانی از
                  حوزه‌های سنگ، صنایع غذایی، هنر و هولدینگ فروش برندهای ترکیه‌ای
                  همکاری داشته است و همواره سعی داشته است رضایت آنها را تا حد
                  امکان جلب نماید.‎
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
