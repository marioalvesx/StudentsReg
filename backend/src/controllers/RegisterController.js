const Student = require('../models/Student');
const Register = require('../models/Register');

module.exports = {
    async index(req, res) { // Procura todos os estudantes registrados
        const register = await Register.find();

        return res.json(register);
    },


    async store(req, res) {
        const { id, nome, nota } = req.body;
        const { user_id } = req.headers; // ID do usuario que cadastrou estudante

        const user = await Student.findById(user_id);

        if (!user) {
            return res.status(400).json({ error: 'Student does not exists' });
        }

        const register = await Register.create({ // Cria estudante com dados novos preenchidos
            user: user_id,
            id: id,
            nome: nome,
            nota: nota
        })

        return res.json(register)   // Retorna os dados do estudante cadastrado
    }
};