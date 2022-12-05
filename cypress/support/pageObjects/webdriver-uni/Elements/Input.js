import BaseElements from "./BaseElements_PO";

class Input extends BaseElements {
    constructor(XPath){
        super(XPath);
    }

    Type(string){
        return this.cy.type(string);
    }
}
export default Input;