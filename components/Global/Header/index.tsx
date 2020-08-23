import classNames from "classnames";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";

const Index = () => {
  const router = useRouter();
  const [isSticky, setIsSticky] = useState(false);
  const handleSticky = () => {
    if (window.scrollY > 20) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleSticky);
    return () => {
      window.removeEventListener("scroll", handleSticky);
    };
  }, []);

  const isWhite = router.pathname.includes("/news");
  return (
    <header
      className={classNames(
        "header-area",
        { "header-sticky": isSticky },
        { "header-white": isWhite }
      )}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Navbar />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Index;
