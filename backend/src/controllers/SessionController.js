const User = require('../models/Student');
// index, show, store, update, destroy

module.exports = {
    async store(req, res) {
        const { matricula } = req.body;

        let user = await User.findOne({ matricula }); // Procura matricula informada no banco de dados

        if(!user) { // Se usuário nao existir, cria novo 
            user = await User.create({ matricula });
        }

        // const user = await User.create({ matricula });

        return res.json(user);
    }
};