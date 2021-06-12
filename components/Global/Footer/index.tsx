import TextC from "../TextC";
import Address from "./Address";
import CopyRight from "./CopyRight";
import Logo from "./Logo";
import Nav from "./Nav";

const index = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-12 col-sm-12">
            <Logo />
            <TextC>
              سفیر ارتباطات هزاره سوم؛ همگام با تکنولوژی روز دنیا
            </TextC>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-6">
            <h5>دسترسی سریع</h5>
            <Nav />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <h5>ارتباط با ما</h5>
            <Address />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <CopyRight />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default index;
