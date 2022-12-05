class BaseElements {
    constructor(XPath){
        this.cy = cy.get(XPath);
    }

    Click(){
        return this.cy.click();
    }
}
export default BaseElements;