import BreadCrumbs from "components/Global/BreadCrumbs";
import CardNews, { INews } from "components/news/CardNews";
import SearchWidget from "components/news/SearchWidget";

const fakeNews: INews[] = [
  {
    imageSrc: "",
    month: "شهریور",
    day: "01",
    author: "منتظری",
    comments: 3,
    title: "مایکروسافت ۶ دامنه فیشینگ مرتبط با هکرهای روسی را از کار انداخت",
    content:
      "مایکروسافت به‌تازگی اعلام کرد دامنه‌های متعلق به هکرهای روسی که وب‌سایت‌های سنا و دو اندیشکده‌ی آمریکایی دیگر را جعل کرده بودند، از کار انداخته است. ب...",
  },
  {
    imageSrc: "",
    month: "شهریور",
    day: "01",
    author: "منتظری",
    comments: 3,
    title: "مایکروسافت ۶ دامنه فیشینگ مرتبط با هکرهای روسی را از کار انداخت",
    content:
      "مایکروسافت به‌تازگی اعلام کرد دامنه‌های متعلق به هکرهای روسی که وب‌سایت‌های سنا و دو اندیشکده‌ی آمریکایی دیگر را جعل کرده بودند، از کار انداخته است. ب...",
  },
  {
    imageSrc: "",
    month: "شهریور",
    day: "01",
    author: "منتظری",
    comments: 3,
    title: "مایکروسافت ۶ دامنه فیشینگ مرتبط با هکرهای روسی را از کار انداخت",
    content:
      "مایکروسافت به‌تازگی اعلام کرد دامنه‌های متعلق به هکرهای روسی که وب‌سایت‌های سنا و دو اندیشکده‌ی آمریکایی دیگر را جعل کرده بودند، از کار انداخته است. ب...",
  },
];

export default function News() {
  return (
    <section className="page">
      <BreadCrumbs />
      <div className="page-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12 col-sm-12">
              <div className="blog-list">
                <div className="row">
                  {fakeNews.map((item, index) => {
                    return (
                      <div key={index} className="col-lg-6 col-md-6 col-sm-12">
                        <CardNews {...item} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
              <aside className="default-aside">
                <div className="sidebar">
                  <SearchWidget />
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
