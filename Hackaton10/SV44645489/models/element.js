const mongoose = require("mongoose")

const elementSchema = mongoose.Schema({       
    dsElement:{
        type: String,
        require: true,       
    },   
    typeElement:{
        type: [null, "MATERIA PRIMA", "INSUMO"],
        default: null
    }, 
    idUniMean: {
        type: String,
        require: true,       
    },
    multiple:{
        type: Number,
        default: 0.0
    },
    quantity:{
        type: Number,
        default: 0.0
    },
    cost:{
        type: Number,
        default: 0.0
    }
},
{
    timestamps: true,
    versionKey: false
}
)

module.exports = mongoose.model('element', elementSchema, 'element')