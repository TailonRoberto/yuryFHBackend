 const Spot = require('../models/Spot');
//  const User = require('../models/User');
 
 module.exports = {
    async show(req, res){


       const spots = await Spot.find();
       
       if(!spots){ 
         return res.status(400).json({ erro: 'Filme não encontrado' });
       }else{
         return res.json(spots);
       }
      
       

    }

 } ;
