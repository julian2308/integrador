import { Button, Stack } from "@mui/material";
import { useRouter } from "next/router";
import { FC } from "react";

export type ButtonsFormProps = {
  form: number;
};
const ButtonForm: FC<ButtonsFormProps> = ({ form }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/register", undefined, { shallow: true });
  };

  return (
    <Stack spacing={2} direction="column">
      {form === 0 && (
        <Button
          onClick={handleClick}
          variant="contained"
          color="secondary"
          sx={{ height: "50px" }}>
          Crear cuenta
        </Button>
      )}
    </Stack>
  );
};
export default ButtonForm;
