/// <reference types="cypress" />

describe("Alias and ", () => {
    it("Validate a specific hair care product", () => {
      cy.visit("https://automationteststore.com/");
      cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

      cy.get(".fixed_wrapper .prdocutname").eq(0).invoke('text').as('productThumbnail')
      cy.get('@productThumbnail').its('length').should('be.gt', 5)
      cy.get('@productThumbnail').should('include', 'Seaweed Conditioner')
    });

    it("Validate a specific hair care product TEST Challange", () => {
      cy.visit("https://automationteststore.com/");
      cy.get(".thumbnail").its('length').should('eq', 16);
      cy.xpath("//div[@class='pricetag jumbotron']").find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart');
      cy.xpath("//div[@class='pricetag jumbotron']").find('.nostock').each(($el, index)=>{
        cy.log(index);
        cy.wrap($el).invoke('text').should('eq', 'Out of Stock');
      })
    });
    it.only("Calculate total of normal and sale products", () => {
      cy.visit("https://automationteststore.com/");
      cy.get('.thumbnail').as('productThumbnail')
      // cy.get('@productThumbnail').find('.oneprice').each(($el, index, $list) => {
      //     cy.log($el.text());
      // });
      cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice')
      cy.get('.thumbnail').find('.pricenew').invoke('text').as('saleItemPrice')
      
      var itemsTotal = 0;
      cy.get('@itemPrice').then($linkText => {
          var itemsPriceTotal = 0;
          var itemPrice = $linkText.split('$');
          var i;
          for(i = 0; i < itemPrice.length; i++) {
              cy.log(itemPrice[i])
              itemsPriceTotal += Number(itemPrice[i])
          }
          itemsTotal += itemsPriceTotal;
          cy.log("Non sale price items total: " + itemsPriceTotal)
      })
  
      cy.get('@saleItemPrice').then($linkText => {
          var saleItemsPrice = 0;
          var saleItemPrice = $linkText.split('$');
          var i;
          for(i = 0; i < saleItemPrice.length; i++) {
              cy.log(saleItemPrice[i])
              saleItemsPrice += Number(saleItemPrice[i])
          }
          itemsTotal += saleItemsPrice;
          cy.log("Sale price items total: " + saleItemsPrice)
      })
      .then(() => {
          cy.log("The total price of all products: " + itemsTotal)
          expect(itemsTotal).to.equal(625.6)
      })
    });
});
  