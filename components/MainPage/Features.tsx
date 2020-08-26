import React from "react";
import FeatureItem from "./FeatureItem";

const Features = () => {
  return (
    <section className="section features-home">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <FeatureItem icon="fa fa-tachometer" title="سرعت و کیفیت بالا">
                کلیه خدمات این مجموعه در اسرع وقت با دقت بالا هم چنین تمامی
                مراحل انجام کار از کیفیت بالایی برخوردار می باشد.
              </FeatureItem>

              <FeatureItem icon="fa fa-handshake-o" title="مشتری مداری">
                این مرکز با بهره گیری از افراد متخصص و مجرب جهت جلب رضایت
                مشتریان در زمینه های فناوری اطلاعات و همواره پیشگام بوده.
              </FeatureItem>
              <FeatureItem icon="fa fa-star" title="سابقه درخشان">
                این مجموعه با تکیه بر دانش فنی و تجارب ارزشمند در بیش از دو دهه
                تلاش مستمر و مقتدرانه در کنار شما عزیزان می باشد.
              </FeatureItem>

              <FeatureItem icon="fa fa-users" title="نیروی جوان و خلاق">
                شرکت سفیر ارتباطات هزاره سوم با بهره گیری از مدیران مجرب و نیروی
                جوان و با تکیه بر سال ها تجربه برآن است بهترین خدمات را ارائه
                نماید.
              </FeatureItem>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
