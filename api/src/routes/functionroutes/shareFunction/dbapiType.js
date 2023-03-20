const axios = require('axios')
const {Type} = require('../../../db.js')



const apiType = async ()=>{
    const response = await axios.get("https://pokeapi.co/api/v2/type")
    const typeurl = response.data.results
    var newType = []
    for(let type of typeurl){
        let typeurl2 = await axios.get(type.url)
       let defType = {
            name: typeurl2.data.name,
        }
        newType.push(defType)
    }
        await Type.bulkCreate(newType);
    return newType
}

module.exports = {
    apiType
}