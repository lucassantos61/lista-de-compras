const {describe, it} = require('mocha')
const sinon = require('sinon')
const {join} = require('path')
const ShoppingListService = require('./../../src/service/shoppingListService')
const { expect } = require('chai')
const mocks = {
    validShoppingList: require('./../mocks/valid-shoppingList.json'),
    validProductList: require('./../mocks/valid-productList.json')
}
const shoppingListDB = join(__dirname, './../../database/', 'shoppingList.json')
describe('Shopping List suite tests', () => {
    let shoppingListService = {}
    let sandbox = {}
    before(() => {
        shoppingListService = new ShoppingListService({shoppingList: shoppingListDB})
    })
    beforeEach(() => {
        sandbox = sinon.createSandbox()
    })
    afterEach(() => {
        sandbox.restore()
    })

    it('Insert a new shopping List',async () => {
        const shoppingListItem = { ...mocks.validShoppingList, id,shoppingDate:"2024-06-31"}

        console.log(shoppingListItem)
        const result = await shoppingListService.createList(shoppingListItem)

        expect(result).to.be.true
    })

    it('Should return a shopping list', () => {
    
    })

    it('Should return a shopping list by Id', () =>{
        
    })


    it('Should return a product by Id', () =>{
        
    })


    it('Should return a product list ', () =>{
        
    })
})