const mongoose = require('mongoose');

const RegisterSchema = new mongoose.Schema({    // Tela para cadastro de estudante
    id: Number,
    nome: String,
    nota: Number,
    user: {
        type: mongoose.Schema.Types.ObjectId, // ID do usuario que cadastrou o estudante
        ref: 'User'
    }
});

module.exports = mongoose.model('Register', RegisterSchema);