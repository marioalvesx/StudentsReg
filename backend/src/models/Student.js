const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({    // Tela para login para cadastro de estudante
    matricula: Number
});

module.exports = mongoose.model('Student', StudentSchema);