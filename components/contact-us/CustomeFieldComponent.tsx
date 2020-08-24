import classnames from "classnames";
import React from "react";
import { UseFormMethods } from "react-hook-form";
import { IForm } from "./ContactForm";
interface ICustomeField {
  name: string;
  placeholder: string;
  as?: "input" | "text-area";
}

const CustomeFieldComponent: React.FC<
  Partial<UseFormMethods<IForm>> & ICustomeField
> = ({ name, register, errors, placeholder, as = "input" }) => {
  const fieldClass = errors[name] ? "form-group-error" : "form-group";

  return (
    <div className={fieldClass}>
      {errors[name] && <span>{errors[name].message}</span>}
      {as === "input" && (
        <input
          className={classnames({ "field-error": errors[name] })}
          name={name}
          ref={register}
          type="text"
          placeholder={placeholder}
        />
      )}
      {as === "text-area" && (
        <textarea
          className={classnames({ "field-error": errors[name] })}
          name={name}
          ref={register}
          placeholder={placeholder}
        />
      )}
      {/* {errors[name] && <p>{errors[name].message}</p>} */}
    </div>
  );
};

export default CustomeFieldComponent;
