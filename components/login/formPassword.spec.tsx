/* eslint-disable @typescript-eslint/no-empty-function */
import { screen } from "@testing-library/react";
import { renderWithReactHookForm } from "grupo-04/test/form-helper";
import FormPassword from "./formPassword";

describe("FormPassword component", () => {
  it("should render the heading", () => {
    renderWithReactHookForm(<FormPassword form={1} email={""} />);
    const heading = screen.getByRole("heading", {
      name: "Ingresá tu contraseña",
    });
    expect(heading).toBeInTheDocument();
  });
  it("should render all the inputs", () => {
    renderWithReactHookForm(<FormPassword form={1} email={""} />);

    const inputPassword =
        screen.getByLabelText<HTMLInputElement>("Contraseña*");

    expect(inputPassword).toBeInTheDocument();
  });
  it("should render the submit button", () => {
    renderWithReactHookForm(<FormPassword form={1} email={""} />);
    const submitButton = screen.getByRole("button", {
      name: /CONTINUAR/i,
    });

    expect(submitButton).toBeInTheDocument();
  });
});
