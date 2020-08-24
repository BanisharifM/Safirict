import ContactForm from "components/contact-us/ContactForm";
import ContactInfo from "components/contact-us/ContactInfo";
import BreadCrumbs from "components/news/BreadCrumbs";
import dynamic from "next/dynamic";
const ContactMap = dynamic(() => import("components/contact-us/ContactMap"), {
  ssr: false,
});

const index = () => {
  return (
    <section className="page">
      <BreadCrumbs />
      <div className="page-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="contact">
                <ContactMap />
                <ContactInfo />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="contact-bottom">
                <div className="row">
                  {/* <!-- ***** Contact Text Start ***** --> */}
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <h5 className="margin-bottom-30">ارتباط با ما</h5>
                    <div className="contact-text">
                      <p>
                        برای بیان انتقادات و پیشنهادات خود در رابطه با کارکرد
                        مجموعه سفیر ارتباطات هزاره سوم با ما در ارتباط باشید.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-6 col-sm-12">
                    <ContactForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default index;
