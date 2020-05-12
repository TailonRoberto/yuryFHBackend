// criando a mesma estrutura do User
const mongoose = require("mongoose");

const SpotShema = new mongoose.Schema(
{
   thumbnail: String,
   nome: String,   
   tipo: String,  
   filmeserie: String,     
   categorias: [String],
   sinopse: String,
   trailer: String,
   elenco: [String],
   qvideo: String, 
   qaudio: String,  
   IMDb: String,
   duracao: String,
   ano: String,
   adicionado: String,   
   idiomas: [String], 
   legendas: [String], 
   links: [String],
   tamanho: [String],     
   formato: [String],

}, {
  toJSON: {
      virtuals: true,
  }  
});

SpotShema.virtual('thumbnail_url').get(function(){
    return `http://localhost:3333/files/${this.thumbnail}`
})

SpotShema.virtual('Image_Local').get(function(){
    return `/files/${this.thumbnail}`
})

module.exports = mongoose.model('Spot', SpotShema);

