const spot = require('../models/Spot');
module.exports = {

   async store(req, res) {

       const { id } = req.headers;
       
       const spots = await Spot.find({ _id: id })       
       return res.json(spots);

       const booking = await Booking.create({
         
              
         user: user_id,
         spot: spot_id, 
         date,  
       


       });

       await booking.populate('spot').populate('user').execPopulate();
       
       // procurando se tem alguma conexao
       const ownerSocket = req.connectedUsers[booking.spot.user];

       if (ownerSocket){
          req.io.to(ownerSocket).emit('booking_request', booking);
       }
    
       return res.json(booking);

   }

};
