const BaseEntitie = require("./base/baseEntitie");

class Products extends BaseEntitie {
    constructor({id, name, price}) {
        super({id, name})

        this.price = price
    }
}

module.exports = Products