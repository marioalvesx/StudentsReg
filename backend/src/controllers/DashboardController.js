const Register = require('../models/Register');

module.exports = {  // Controla todos os estudantes cadastrados por aquele perfil
    async show(req, res) {
        const { user_id } = req.headers;

        const register = await Register.find({ user: user_id });

        return res.json(register);
    }
}