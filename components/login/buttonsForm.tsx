import { Button, Stack } from "@mui/material";
import { useRouter } from "next/router";
import { FC } from "react";

export type ButtonsFormProps = {
  form: number;
  handleNext: () => void;
};
const ButtonsForm: FC<ButtonsFormProps> = ({ form, handleNext }) => {
  const router = useRouter();

  const handleClick = () =>{
    router.push("/registro", undefined, { shallow: true });
  }

  return (
    <Stack spacing={2} direction="column">
      {form === 0 && (
        <>
          <Button onClick={handleNext} variant="contained">
            Continuar
          </Button>
          <Button onClick={handleClick} variant="contained" color="secondary">
            Crear cuenta
          </Button>
        </>
      )}
      {form === 1 &&
      <Button onClick={handleNext} variant="contained">
        Continuar
      </Button>
      }
    </Stack>
  );
};
export default ButtonsForm;
