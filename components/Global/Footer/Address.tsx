import UL from "../UL";
import SocialItem from "../SocialItem";
import { socialItems } from "./socialItems";

const Address = () => {
  return (
    <div className="address">
      <p>
        اصفهان_خیابان رباط_خیابان باهنر
        <br />
        ساختمان پارتاک_طبقه اول_واحد2
      </p>
      <p>تلفن: 03133389261</p>
      <p>
        <span>ایمیل:</span>
        <a href="#">gmte.1380@gmail.com</a>
      </p>
      <UL className="social">
        {socialItems.map((item,i) => (
          <SocialItem key={i} {...item} />
        ))}
      </UL>
    </div>
  );
};

export default Address;
