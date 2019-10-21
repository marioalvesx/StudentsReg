const mongoose = require('mongoose'); // Ação de Checkpoint: Testar e verificar se cumpre o pedido no trabalho

const CheckpointSchema = new mongoose.Schema({    
    date: String,
    approved: Boolean,
    user: { // Usuario que quer realizar o Checkpoint
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    },
    register: { // Qual estudante vai ser criado o checkpoint
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Register'
    }
});

module.exports = mongoose.model('Checkpoint', CheckpointSchema);