import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { formEmailProps } from "./formEmail";
import FormNavigation from "./formNavigation";

const submittedEmail = {
  email: "test@a.com",
};

const mockFormEmail = jest.fn();
jest.mock("./formEmail", () =>
  jest.fn((props: formEmailProps) => {
    mockFormEmail(props);
    return (
      <div onClick={() => props.handleNext(submittedEmail)}>FormEmail</div>
    );
  })
);

describe("FormNavigation", () => {
  describe("when rendering default form", () => {
    it("should render the form 0 with FormEmail", () => {
      render(<FormNavigation />);
      const form = screen.getByText("FormEmail");
      expect(form).toBeInTheDocument();

      expect(mockFormEmail).toBeCalledWith(
        expect.objectContaining({ form: 0 })
      );
    });
  });
  describe("when submitting formEmail", () => {
    it("should not render FormEmail", async () => {
      render(<FormNavigation />);
      const form = screen.getByText("FormEmail");
      await userEvent.click(form);
      expect(screen.queryByText("FormEmail")).not.toBeInTheDocument();
    });
  });
});
