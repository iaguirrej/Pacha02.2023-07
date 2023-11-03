const mongoose = require("mongoose")

const typeDocumentSchema = mongoose.Schema({
    dsTypDoc: {
        type: String,
        require: true,       
    },
    abrTypDoc:{
        type: String,
        require: true,       
    }
},
{
    timestamps: true,
    versionKey: false
}
)

module.exports = mongoose.model('type_document', typeDocumentSchema, 'type_document')