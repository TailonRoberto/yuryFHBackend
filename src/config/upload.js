const multer = require('multer');
const path = require('path');

module.exports = {
   storage: multer.diskStorage({        
           destination: path.resolve(__dirname, '..', '..', 'uploads'),
           filename: (req, file, cb) => {
             // recebendo a extensao da imagem  
             const ext = path.extname(file.originalname)
             // recebendo o nome da imagem 
             const name = path.basename(file.originalname, ext)

             cb(null, `${name}-${Date.now()}${ext}`);
            },
       }),


    };
