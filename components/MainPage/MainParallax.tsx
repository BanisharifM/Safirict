import React from "react";
import { Parallax } from "react-parallax";

const MainParallax = () => {
  return (
    <Parallax
      bgImage={"/images/photos/parallax-counter.jpg"}
      className="parallax parallax-counter"
      strength={1000}
      renderLayer={() => (
        <div className="parallax-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="count-item">
                  <strong>132</strong>
                  <span>
                    پروؤه های <br />
                    انجام شده
                  </span>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="count-item">
                  <strong>98%</strong>
                  <span>
                    رضایت
                    <br />
                    مشتری
                  </span>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="count-item">
                  <strong>12</strong>
                  <span>
                    سال
                    <br />
                    تجربه
                  </span>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="count-item">
                  <strong>11</strong>
                  <span>
                    پروژه های
                    <br />
                    درحال انجام
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    />
  );
};

export default MainParallax;
// <section className="parallax-counter" id="counter" >
//       <Parallax
//         bgImage={"/images/photos/parallax-counter.jpg"}
//         className="parallax"
//         // style={{minHeigth  : '300px'}}
//         strength={1000}
//         renderLayer={() => (
//         )}
//       />
//     </section>
