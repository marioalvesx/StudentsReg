const Checkpoint = require('../models/Checkpoint');

module.exports = {
    async store(req, res){
        const { user_id } = req.headers;
        const { register_id } = req.params;
        const { date } = req.body;

        const checkpoint = await Checkpoint.create({
            user: user_id,
            register: register_id,
            date,
        }); 

        await checkpoint.populate('register').populate('user').execPopulate(); // Mostra todos os dados do usuario que fez checkpoint e do estudante

        return res.json(checkpoint);
    }
};