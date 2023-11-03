const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    idTypIdeDoc:{
        type: String,
        require: true       
    },
    nroIdeDoc:{
        type: String,
        require: true
    },
    dsUser:{
        type: String,
        require: true
    },
    nomUser:{
        type: String,
        require: false
    },
    appUser:{
        type: String,
        require: false
    },
    apmUser:{
        type: String,
        require: false
    },
    businessName:{
        type: String,
        require: false
    },
    tradeName:{
        type: String,
        require: false
    },
    role:{
        type: [null, "ADMINISTRADOR", "VENDEDOR", "PROVEEDOR", "CLIENTE"],
        default: null
    }
},
{
    timestamps: true,
    versionKey: false
}
)

module.exports = mongoose.model('user', userSchema,'user')