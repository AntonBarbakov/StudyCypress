import Button from "./Elements/Button";
import Input from "./Elements/Input";

class ContactUsPage_PO {
    get FirstNameInput() { return new Input('[name="first_name"]') }
    get LastNameInput() { return new Input('[name="last_name"]') }
    get EmailInput() { return new Input('[name="email"]') }
    get FeedbackInput() { return new Input('textarea.feedback-input') }
    get SubmitButton() { return new Button('[type="submit"]') }
}
export default ContactUsPage_PO;