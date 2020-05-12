// criando a mesma estrutura do User
const mongoose = require("mongoose");

const LinksShema = new mongoose.Schema(
{
   idRelat: String,   
   idiomas: [String],  
   links: [String],
   tamanho: [String],     
   formato: [String],
   legendas: [String]


});

console.log('ta criando');
module.exports = mongoose.model('Links', LinksShema);

