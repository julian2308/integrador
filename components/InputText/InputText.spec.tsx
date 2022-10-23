import { render, screen } from "@testing-library/react";
import { renderWithReactHookForm } from "grupo-04/test/form-helper";
import userEvent from "@testing-library/user-event";
import InputText from "grupo-04/components/InputText/InputText";

describe("InputText component", () => {
  describe("when rendering default", () => {
    it("should render an input", () => {
      renderWithReactHookForm(<InputText name="name" label="Name" />);

      const input = screen.getByRole("textbox", { name: "Name" });
      expect(input).toBeInTheDocument();
      expect(input).toHaveValue("");
    });
    it("should render the default value", () => {
      renderWithReactHookForm(<InputText name="name" label="Name" />, {
        defaultValues: { name: "Test" },
      });

      const input = screen.getByRole("textbox", { name: "Name" });
      expect(input).toHaveValue("Test");
    });
    it("should render the button show/hide password when the type is password", () => {
      renderWithReactHookForm(
        <InputText name="name" label="Name" type="password" />
      );
      const buttonPassword = screen.getByLabelText(
        "toggle password visibility"
      );
      expect(buttonPassword).toBeInTheDocument();
    });
  });

  describe("when the user interacts with a password type input", () => {
    it("should hide/show the password when the user clicks on the button", async () => {
      renderWithReactHookForm(
        <InputText name="password" label="Password" type="password" />
      );
      const buttonPassword = screen.getByLabelText(
        "toggle password visibility"
      );
      const input = screen.getByLabelText("Password");
      expect(input).toHaveAttribute("type", "password");

      await userEvent.click(buttonPassword);
      expect(await screen.findByLabelText("Password")).toHaveAttribute(
        "type",
        "text"
      );
    });
  });

  describe("when the user complete an input", () => {
    it("should render the data", async () => {
      renderWithReactHookForm(<InputText name="name" label="Name" />, {
        defaultValues: { name: "" },
      });
      const input = screen.getByRole<HTMLInputElement>("textbox", {
        name: "Name",
      });

      await userEvent.type(input, "Test");
      expect(input.value).toBe("Test");
    });

    it("should not render the data if the input only allows numbers", async () => {
      const regexNumber = /^[0-9]*$/gm;

      renderWithReactHookForm(
        <InputText name="number" label="Number" regex={regexNumber} />,
        { defaultValues: { number: "" } }
      );
      const input = screen.getByRole<HTMLInputElement>("textbox", {
        name: "Number",
      });

      await userEvent.type(input, "Test");
      expect(input.value).toBe("");
    });
  });

  it("should render the data if the input only allows numbers", async () => {
    const regexNumber = /^[0-9]*$/gm;

    renderWithReactHookForm(
      <InputText name="number" label="Number" regex={regexNumber} />,
      { defaultValues: { number: "" } }
    );
    const input = screen.getByRole<HTMLInputElement>("textbox", {
      name: "Number",
    });

    await userEvent.type(input, "123456");
    expect(input.value).toBe("123456");
  });
});
