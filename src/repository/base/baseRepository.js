const { read } = require('fs')
const {readFile, writeFile} = require('fs/promises')
const {uuidv1} = require('uuid')

class BaseRepository {
    constructor ({ file }) {
        this.file = file
    }

    async find(itemId) {
        const content = JSON.parse(readFile(this.file))
        if(!itemId)  return content

        return content.find(({ id }) => id === itemId)
    }

    async create(item) {
        const currentData = JSON.parse(await (readFile(this.file)))
        item.id = uuidv1()
        console.log(itemToInsert)
        currentData.push(itemToInsert)

        await writeFile(this.file, JSON.stringify(currentData))
        return true
    }
}

module.exports = BaseRepository