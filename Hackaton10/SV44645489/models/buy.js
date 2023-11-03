const mongoose = require("mongoose")

const buySchema = mongoose.Schema({       
    idTypDoc:{
        type: String,
        require: true,       
    },   
    serieDoc:{
        type: String,
        require: true,  
    }, 
    nroDoc: {
        type: String,
        require: true,       
    },
    idUserBuyer:{
        type: String,
        require: true,  
    },
    idUserSupplier:{
        type: String,
        require: true,  
    },
    dateBuy:{
        type: Date,
    },
    mtoBuy:{
        type: Number,
        default: 0.0
    },
    mtoIGV:{
        type: Number,
        default: 0.0
    },
    mtoSubTot:{
        type: Number,
        default: 0.0
    },
    mtoTot:{
        type: Number,
        default: 0.0
    }
},
{
    timestamps: true,
    versionKey: false
}
)

module.exports = mongoose.model('buy', buySchema, 'buy')