import { Parallax } from "react-parallax";
export default function BreadCrumbs() {
  return (
    <Parallax
      bgImage={"/images/photos/parallax-counter.jpg"}
      className="cover"
      strength={1000}
      renderLayer={() => (
        <div className="page-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1>اخبار</h1>
              </div>
              <div className="col-lg-12">
                <ol className="breadcrumb">
                  <li>
                    <a href="index.html">خانه</a>
                  </li>
                  <li>
                    <a href="blog&amp;news.html">وبلاگ و اخبار</a>
                  </li>
                  <li className="active">اخبار</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      )}
    />
  );
}
