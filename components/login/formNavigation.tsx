import { FC, useState } from "react";
import FormEmail from "./formEmail";
import FormPassword from "./formPassword";
import FormVerification from "./formVerification";

const FormNavigation: FC = () => {
  const [form, setForm] = useState<number>(0);
  const [email, setEmail] = useState<string>("");

  const handleSubmitFormEmail = () => {
    setForm(1);
  };

  const handleSubmitFormPassword = () => {
    setForm(2);
  };

  return (
    <>
      {form === 0 && (
        <FormEmail
          form={form}
          setEmail={setEmail}
          handleNext={handleSubmitFormEmail}
        />
      )}
      {form === 1 && <FormPassword form={form} email={email} handleNext={handleSubmitFormPassword}/>}
      {form === 2 && <FormVerification />}
    </>
  );
};

export default FormNavigation;
