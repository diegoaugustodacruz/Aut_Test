import { Selector } from "testcafe";

class Cart{
    constructor(){
        this.termsLabel = Selector('input#termsofservice')
        this.cartTotal = Selector('td.cart-total-right')
        this.checkOutBtn = Selector('button#checkout.button-1.checkout-button');
    }
}

export default new Cart();