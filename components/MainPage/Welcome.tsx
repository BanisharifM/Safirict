import React from 'react'

const Welcome = () => {
    return (
<div className="welcome-area" id="welcome">
      {/* <!-- ***** Header Background Image Start ***** --> */}
      <div className="right-bg">
        <img src="/images/photos/header.jpg" className="img-fluid float-left" alt=""/>
      </div>
      {/* <!-- ***** Header Background Image End ***** --> */}

      <div className="header-bg">
        <img src="/images/photos/header-bg-rtl.png" className="img-fluid" alt=""/>
      </div>

      {/* <!-- ***** Header Text Start ***** --> */}
      <div className="header-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12 col-sm-12">
              <h1>شرکت<span> سفیر ارتباطات </span>هزاره سوم</h1>
              {/* <!--                        <h1>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از <span>صنعت چاپ</span></h1>--> */}
              <p>
                با هدف گسترش صنعت IT با بهره گیری از مدیران مجرب و نیروی جوان و با تکیه بر سال ها
                تجربه در علوم ارتباطات و اطلاعات فعالیت خود را آغاز نموده است.
              </p>
              {/* <!--                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز</p>--> */}
              {/* <a href="#features" className="btn-primary-line" dideo-checked="true">بیشتر</a> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ***** Header Text End ***** -->

      <!-- ***** Play Button Start ***** --> */}
      {/* <!--        <div className="play-button-wrapper">-->
      <!--            <a href="#" className="btn-play" dideo-checked="true">-->
      <!--                <i className="fa fa-play"></i>-->
      <!--            </a>-->
      <!--        </div>-->
      <!-- ***** Play Button End ***** --> */}
    </div>
    )
}

export default Welcome
