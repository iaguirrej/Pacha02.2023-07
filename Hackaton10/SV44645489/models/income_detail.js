const mongoose = require("mongoose")

const incomeDetailSchema = mongoose.Schema({       
    idIncome:{
        type: String,
        require: true,       
    },   
    idElement:{
        type: String,
        require: true,  
    },     
    idUniMean:{
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

module.exports = mongoose.model('income_detail', incomeDetailSchema, 'income_detail')