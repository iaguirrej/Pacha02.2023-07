const mongoose = require("mongoose")

const incomeSchema = mongoose.Schema({       
    idUserResponsible:{
        type: String,
        require: true,       
    },   
    idProduct:{
        type: String,
        require: true,  
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
    },
    utility:{
        type: Number,
        default: 0.0
    },
    price:{
        type: Number,
        default: 0.0
    }
},
{
    timestamps: true,
    versionKey: false
}
)

module.exports = mongoose.model('income', incomeSchema, 'income')