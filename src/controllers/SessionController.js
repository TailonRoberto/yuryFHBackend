// index, show, store, update, destroy
const User = require("../models/User");

module.exports = {
    // criar um sessão com o metodo store
    // store - normal async store ... aguarda algum comando mais assincrono
    async store(req,res){
        // metodo comun
        // const email = req.body.email;
        // recurso mais atual do js buscar email dentro da variavel body
        const { email } = req.body;

        // verificando e retornando o email do usuario caso exista / pela chave email por ter o mesmo
        // nome da variavel email
        let user = await User.findOne({ email });

        if (!user)
        {
           user = await User.create({ email })
        }
        
        //buscando quando a chave tiver o nome diferente da variavel 
        //let user = await User.findOne({ email : email });

        //criar um email na base de dados
        //const user = await User.create({ email })

        return res.json(user);
    }
};