/* eslint-disable @typescript-eslint/no-empty-function */
import { screen } from "@testing-library/react";
import { renderWithReactHookForm } from "grupo-04/test/form-helper";
import FormEmail from "./formEmail";
import { FormEmailType } from "./login.type";

describe("FormEmail component", () => {
  it("should render the heading", () => {
    renderWithReactHookForm(
      <FormEmail
        form={0}
        setEmail={(email: string) => {}}
        handleNext={(data: FormEmailType) => {}}
      />
    );
    const heading = screen.getByRole("heading", {
      name: "¡Hola! Ingresá tu e-mail",
    });
    expect(heading).toBeInTheDocument();
  });
  it("should render all the inputs", () => {
    renderWithReactHookForm(
      <FormEmail
        form={0}
        setEmail={(email: string) => {}}
        handleNext={(data: FormEmailType) => {}}
      />
    );

    const inputEmail = screen.getByRole("textbox", {
      name: "Correo electrónico*",
    });

    expect(inputEmail).toBeInTheDocument();
  });
  it("should render the submit and redirect buttons", () => {
    renderWithReactHookForm(
      <FormEmail
        form={0}
        setEmail={(email: string) => {}}
        handleNext={(data: FormEmailType) => {}}
      />
    );
    const submitButton = screen.getByRole("button", {
      name: /CONTINUAR/i,
    });
    const ButtonCrearCuenta = screen.getByRole("button", {
      name: /CREAR CUENTA/i,
    });
    expect(submitButton).toBeInTheDocument();
    expect(ButtonCrearCuenta).toBeInTheDocument();

  });
});
