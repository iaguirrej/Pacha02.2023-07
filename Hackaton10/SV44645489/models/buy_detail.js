const mongoose = require("mongoose")

const buyDetailSchema = mongoose.Schema({       
    idBuy:{
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
    },
    valBuy:{
        type: Number,
        default: 0.0
    },
    IGV:{
        type: Number,
        default: 0.0
    },
    valIGV:{
        type: Number,
        default: 0.0
    },
    valSubTot:{
        type: Number,
        default: 0.0
    },
    valTot:{
        type: Number,
        default: 0.0
    }
},
{
    timestamps: true,
    versionKey: false
}
)

module.exports = mongoose.model('buy_detail', buyDetailSchema, 'buy_detail')