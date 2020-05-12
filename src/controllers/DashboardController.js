 const Spot = require('../models/Spot');
//  const User = require('../models/User');
 
 module.exports = {
    async show(req, res){

      //  const { user_id } = req.headers;
       
       //const user = await User.findById(user_id);
        
      //  if(!user){ 
      //    return res.status(400).json({ erro: 'Users does not exists' });
      //  }
      //  else   {
      //     return res.json({status : 'aqui'})
      //  }


       const spots = await Spot.find();
       
       if(!spots){ 
         return res.status(400).json({ erro: 'Spots does not exists' });
       }else{
         return res.json(spots);
       }
      
       

    }

 } ;
