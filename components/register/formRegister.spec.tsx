import { screen } from "@testing-library/react";
import { renderWithReactHookForm } from "grupo-04/test/form-helper";
import userEvent from "@testing-library/user-event";
import FormRegister from "./formRegister.component";

describe("FormRegister component", () => {
  describe("when rendering default", () => {
    it("should render the heading", () => {
      renderWithReactHookForm(<FormRegister />);
      const heading = screen.getByRole("heading", { name: "Crear cuenta" });
      expect(heading).toBeInTheDocument();
    });
    it("should render all the inputs", () => {
      renderWithReactHookForm(<FormRegister />);

      const inputName = screen.getByRole("textbox", { name: "Nombre*" });
      const inputLastname = screen.getByRole("textbox", { name: "Apellido*" });
      const inputEmail = screen.getByRole("textbox", {
        name: "Correo electrónico*",
      });
      const inputDNI = screen.getByRole("textbox", { name: "DNI*" });
      const inputPassword = screen.getByLabelText("Contraseña*");
      const inputPasswordVerification = screen.getByLabelText(
        "Confirmar contraseña*"
      );
      const inputPhone = screen.getByRole("textbox", { name: "Télefono*" });

      expect(inputName).toBeInTheDocument();
      expect(inputLastname).toBeInTheDocument();
      expect(inputEmail).toBeInTheDocument();
      expect(inputDNI).toBeInTheDocument();
      expect(inputPassword).toBeInTheDocument();
      expect(inputPasswordVerification).toBeInTheDocument();
      expect(inputPhone).toBeInTheDocument();
    });
    it("should render the submit button", () => {
      renderWithReactHookForm(<FormRegister />);
      const submitButton = screen.getByRole("button", {
        name: /CREAR CUENTA/i,
      });
      expect(submitButton).toBeInTheDocument();
    });
  });

  describe("when the user complete an input", () => {
    it("should render the data", async () => {
      renderWithReactHookForm(<FormRegister />);

      const inputName = screen.getByRole<HTMLInputElement>("textbox", {
        name: "Nombre*",
      });
      const inputLastname = screen.getByRole<HTMLInputElement>("textbox", {
        name: "Apellido*",
      });
      const inputEmail = screen.getByRole<HTMLInputElement>("textbox", {
        name: "Correo electrónico*",
      });
      const inputDNI = screen.getByRole<HTMLInputElement>("textbox", {
        name: "DNI*",
      });
      const inputPassword =
        screen.getByLabelText<HTMLInputElement>("Contraseña*");
      const inputPasswordVerification = screen.getByLabelText<HTMLInputElement>(
        "Confirmar contraseña*"
      );
      const inputPhone = screen.getByRole<HTMLInputElement>("textbox", {
        name: "Télefono*",
      });

      await userEvent.type(inputName, "Test");
      await userEvent.type(inputLastname, "User");
      await userEvent.type(inputEmail, "Test@test.test");
      await userEvent.type(inputDNI, "123456789");
      await userEvent.type(inputPassword, "P4ssw0rd");
      await userEvent.type(inputPasswordVerification, "P4ssw0rd");
      await userEvent.type(inputPhone, "123456789");

      expect(inputName.value).toBe("Test");
      expect(inputLastname.value).toBe("User");
      expect(inputEmail.value).toBe("Test@test.test");
      expect(inputDNI.value).toBe("123456789");
      expect(inputPassword.value).toBe("P4ssw0rd");
      expect(inputPasswordVerification.value).toBe("P4ssw0rd");
      expect(inputPhone.value).toBe("123456789");
    });
  });
});
