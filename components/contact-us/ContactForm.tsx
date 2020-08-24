import { yupResolver } from "@hookform/resolvers";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import CustomeFieldComponent from "./CustomeFieldComponent";

export interface IForm {
  name: string;
  email: string;
  message: string;
}
const ContactSchema = Yup.object().shape({
  name: Yup.string().required("این فیلد الزامی است"),
  email: Yup.string().required("این فیلد الزامی است").email("فرمت ایمیل نادرست است"),
  message: Yup.string().required("این فیلد الزامی است"),
});

const ContactForm = () => {
  const { register, handleSubmit, errors } = useForm<IForm>({
    resolver: yupResolver(ContactSchema),
  });
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <CustomeFieldComponent
              name="name"
              placeholder="نام و نام خانوادگی"
              register={register}
              errors={errors}
            />
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="form-group">
              <CustomeFieldComponent
                name="email"
                placeholder="ایمیل"
                register={register}
                errors={errors}
              />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-group">
              <CustomeFieldComponent
                name="message"
                placeholder="پیام"
                register={register}
                errors={errors}
                as="text-area"
              />
            </div>
          </div>
          <div className="col-lg-12">
            <button type="submit" className="btn-primary-line">
              ارسال
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
