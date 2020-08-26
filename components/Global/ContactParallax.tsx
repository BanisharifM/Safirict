import React from "react";
import { Parallax } from "react-parallax";

const ContactParallax = () => {
  return (
    <Parallax
      bgImage={"/images/photos/parallax-counter.jpg"}
      className="parallax margin-bottom-100"
      strength={1000}
      renderLayer={() => (
        <div className="parallax-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="info">
                  <p>
                    پروژه ی خود را در زمینه های اجرای شبکه انتقال دیتا ، voip ،
                    سیستم حفاظت و نظارت تصویر و طراحی سایت و… به ما بسپارید.
                  </p>
                  <a className="btn-white-line" href="contact.html">
                    تماس با ما
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    />
  );
};

export default ContactParallax;
