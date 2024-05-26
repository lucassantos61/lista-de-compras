const BaseRepository = require("../repository/base/baseRepository");


class ShoppingListService {
    constructor({shoppingList}) {
        this.shoppingListRepository = new BaseRepository({file: shoppingList})
        this.currecyFormat = new Intl.NumberFormat('pt-br', {
            style:'currency',
            currency: 'BRL'
        }) 
    }
    
   async createList(item) {
        if(!item)return false

        return await this.shoppingListRepository.create(item)
    }
}

module.exports = ShoppingListService