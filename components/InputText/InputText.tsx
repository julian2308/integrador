import { Box, IconButton, TextField, TextFieldProps } from "@mui/material";
import { FC, useState } from "react";
import { useController, useFormContext } from "react-hook-form";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { styled } from "@mui/material/styles";
import { OutlinedInputProps } from "@mui/material/OutlinedInput";

interface Props {
  name: string;
  label?: string;
  defaultValue?: string;
  type?: string;
  regex?: RegExp;
  maxLength?: number;
}
const InputText: FC<Props> = ({
  name,
  label,
  type,
  defaultValue,
  regex,
  maxLength,
}) => {
  const { control } = useFormContext();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  // const InputCustom = styled(TextField)(({ theme }) => ({
  //   "& label": {
  //     color: "white",
  //   },
  //   "&:hover label": {
  //     color: theme.palette.primary.main,
  //   },
  //   "& label.Mui-focused": {
  //     color: theme.palette.primary.main,
  //   },
  //   "& input:invalid + fieldset": {
  //     color: theme.palette.warning.main,
  //   },
  //   "& .MuiOutlinedInput-root": {
  //     color: "#ffffff",
  //     "& fieldset": {
  //       borderColor: "white",
  //     },
  //     "&:hover fieldset": {
  //       borderColor: theme.palette.primary.main,
  //     },
  //     "&.Mui-focused fieldset": {
  //       borderColor: theme.palette.primary.main,
  //     },
  //   },
  // }));

  const {
    field: { onChange, value, ref },
    formState: { errors },
  } = useController<Record<string, string>>({
    name: name,
    control,
    defaultValue,
  });

  const inputValue = (value: any) => {
    if (regex) {
      return value.match(regex) ? value : "";
    } else {
      return value;
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box
      mb={2}
      sx={{
        position: "relative",
        paddingY: "5px",
      }}>
      <TextField
        onChange={onChange}
        value={inputValue(value)}
        variant="outlined"
        label={label}
        name={name}
        inputRef={ref}
        type={showPassword ? "text" : type}
        inputProps={{ maxLength: maxLength }}
        fullWidth
        error={!!errors[name]}
        helperText={`${errors[name]?.message || ""}`}
        sx={{
          backgroundColor: "transparent"
        }}
      />
      {type === "password" && (
        <IconButton
          aria-label="toggle password visibility"
          onClick={handleClickShowPassword}
          sx={{
            position: "absolute",
            right: "2px",
            top: "15px",
          }}>
          {showPassword ? (
            <VisibilityOutlinedIcon
              fontSize="small"
              sx={{ color: "#ffffff" }}
            />
          ) : (
            <VisibilityOffOutlinedIcon
              fontSize="small"
              sx={{ color: "#ffffff" }}
            />
          )}
        </IconButton>
      )}
    </Box>
  );
};
export default InputText;
