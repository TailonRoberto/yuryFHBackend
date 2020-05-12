const Spot = require('../models/Spot');
const Link = require('../models/Links');
// const User = require('../models/User');


module.exports = {

    async index(req, res) {
    //    const { nome } = req.query; // estou buscando um spot especifico
       const _id  = req.headers;
       const spots = await Spot.find({ _id: _id })       
       console.log("estou aqui com o id" + _id);
       return res.json(spots);
    },
    // criar um sessão com o metodo store
    // store - normal async store ... aguarda algum comando mais assincrono
    async store(req,res){
        // muuuuuuuito legal esses logs de console
       // console.log(req.body);
       // console.log(req.file);
        
        const { filename } = req.file;
        const { nome, tipo, filmeserie, categorias, sinopse, trailer, elenco,
                qvideo, qaudio,  imdb,
                duracao, ano, adicionado, idiomas, links, 
                tamanho,  formato, legendas   } = req.body;
        

        // testando se o id do usuario existe na base  
        //  const spot = await User.findById(user_id);

        // if(!user){ 
        //     return res.status(400).json({ erro: 'Users does not exists' });
        // }
        
        // carregando o Spot.js Criando entao a instancia com mongoose e salvando na base #lindoIsso!
        const spot = await Spot.create({
           
            thumbnail: filename,
            nome: nome, 
            tipo: tipo, 
            filmeserie: filmeserie,          
            categorias: categorias.split(',').map(categorias => categorias.trim()),  
            sinopse: sinopse,
            trailer: trailer,
            elenco: elenco.split(',').map(links => elenco.trim()),    
            qvideo: qvideo, 
            qaudio: qaudio,
            imdb: imdb,  
            duracao: duracao,
            ano: ano,
            adicionado: adicionado,
            idiomas: idiomas.split(',').map(idiomas => idiomas.trim()),
            legendas: legendas.split(',').map(legendas => legendas.trim()),
            links: links.split(',').map(links => links.trim()),           
            tamanho: tamanho.split(',').map(tamanho => tamanho.trim()),            
            formato: formato.split(',').map(formato => formato.trim()),
            
                
            
            
        })
                  
        const json = await spot.populate('spot').populate(); 
        return res.json(json);

        
    }
};