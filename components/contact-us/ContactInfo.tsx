import SocialItem from "components/Global/SocialItem";
import React from "react";
import { socialItems } from "./socialItems";

export const ContactInfo = () => {
  return (
    <div className="contact-info">
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="item">
            <i className="fa fa-location-arrow"></i>
            <div className="txt">
              <span>
                اصفهان_خیابان رباط_خیابان باهنر
                <br />
                ساختمان پارتاک_طبقه اول_واحد2
              </span>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="item">
            <i className="fa fa-phone"></i>
            <div className="txt">
              <span>
                <span>وب:</span>
                <span>031-33389260</span>
                <br />
                <span>شبکه:</span>
                <span>031-33386950</span>
              </span>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="item">
            <i className="fa fa-envelope"></i>
            <div className="txt">
              <span>
                <a href="mailto:armanexplorer@gmail.com">
                  armanexplorer@gmail.com
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <ul className="social">
        {socialItems.map((item) => (
          <SocialItem {...item} />
        ))}
      </ul>
    </div>
  );
};
export default ContactInfo;
