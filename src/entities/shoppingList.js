const BaseEntitie = require("./base/baseEntitie");

class ShoppingList extends BaseEntitie {
    constructor({id, name, productInfo, shoppingDate,totalSpend}){
        super(id, name)
        this.shoppingDate = shoppingDate
        this.productInfo = productInfo
        this.totalSpend = totalSpend
    }
}