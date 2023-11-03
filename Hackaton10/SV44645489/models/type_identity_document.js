const mongoose = require("mongoose")

const typeIdentityDocumentSchema = mongoose.Schema({
    dsTypIdeDoc: {
        type: String,
        require: true,       
    },
    abrTypIdeDoc:{
        type: String,
        require: true,       
    }
},
{
    timestamps: true,
    versionKey: false
}
)

module.exports = mongoose.model('type_identity_document', typeIdentityDocumentSchema, 'type_identity_document')