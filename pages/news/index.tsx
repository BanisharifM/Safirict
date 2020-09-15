import BreadCrumbs from "components/Global/BreadCrumbs";
import Card  from "components/Global/Card";
import { fakeNews } from "utils/constants";


export default function News() {
  return (
    <section className="page">
      <BreadCrumbs />
      <div className="page-bottom">
        <div className="container">
          <div className="row">
            <div
              /*className="col-lg-8 col-md-12 col-sm-12" */ className="col-12"
            >
              <div className="blog-list">
                <div className="row">
                  {fakeNews.map((item, index) => {
                    return (
                      <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                        <Card {...item} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            {/* <div className="col-lg-4 col-md-12 col-sm-12">
              <aside className="default-aside">
                <div className="sidebar">
                  <SearchWidget />
                </div>
              </aside>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
