import { FC, useState } from "react";
import FormEmail from "./formEmail";
import FormPassword from "./formPassword";

const FormNavigation: FC = () => {
  const [form, setForm] = useState<number>(0);
  const [email, setEmail] = useState<string>("");
  

  const handleSubmitFormEmail = () => {
    setForm(1);
  };

  return (
    <>
      {form === 0 && (
        <FormEmail form={form} setEmail={setEmail} handleNext={handleSubmitFormEmail} />
      )}
      {form === 1 && <FormPassword form={form} email={email} />}
    </>
  );
};

export default FormNavigation;
