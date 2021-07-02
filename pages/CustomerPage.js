import { Selector} from "testcafe";

class CustomerPage{
    constructor(){
        this.ordersLink = Selector('body > div.master-wrapper-page > div.master-wrapper-content > div > div.side-2 > div > div.listbox > ul > li.customer-orders.inactive > a')
        this.noOrdersLabel = Selector('div.no-data').withText('No orders');
    }


}

export default new CustomerPage();