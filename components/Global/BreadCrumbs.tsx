import { useRouter } from "next/router";
import { Parallax } from "react-parallax";
import { totalCrumbs } from "./crumbList";
import MenuItem from "./Header/MenuItem";

const findTitleCrumb = (path) =>
  totalCrumbs.find((item) => item.path === path).title;

export default function BreadCrumbs() {
  const { pathname } = useRouter();
  const crumbs = pathname
    .split("/")
    .map((c) => ({ to: `/${c}`, title: findTitleCrumb(`/${c}`) }));
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
                  {crumbs.map((c, i) => (
                    <MenuItem
                      key={i}
                      to={c.to}
                      active={i === crumbs.length - 1}
                    >
                      {c.title}
                    </MenuItem>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      )}
    />
  );
}
