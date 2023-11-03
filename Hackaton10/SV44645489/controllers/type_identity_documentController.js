
const typeIdentityDocumentSchema = require("../models/type_identity_document")

const getTypeIdentityDocument = async(req, res) => {
    try{
        const id = req.query.id || false
        if (!!id){
        const typeIdentityDocument = await typeIdentityDocumentSchema.find({_id: id})
        res.status(200).json(typeIdentityDocument)}
        else{
            const typeIdentityDocuments = await typeIdentityDocumentSchema.find()
            res.status(200).json(typeIdentityDocuments)
        }
    }catch(err){
        res.status(500).json({
            message: "No se pudó mostrar datos."
        })
    }
}

const insertTypeIdentityDocument = async (req, res) => {
    try{
        const typeIdentityDocument = typeIdentityDocumentSchema(req.body);
        await typeIdentityDocument.save()
        res.status(200).json(typeIdentityDocument)
    }catch(error){       
        res.status(500).json({'error' : 'Error al crear usuario'})        
    }
}

const updateTypeIdentityDocument = async (req, res) => {
    try{
    const id = req.query.id || false
    await typeIdentityDocumentSchema.findOneAndUpdate({_id: id}, req.body)
    const typeIdentityDocument = await typeIdentityDocumentSchema.find({_id: id})
    res.status(200).json(typeIdentityDocument)
    }catch(err){
        res.status(500).json({
            message: "Usuario no se encontró."
        })
    }
}

const deleteTypeIdentityDocument = async (req, res) => {
    try{
        const id = req.query.id || false
        await typeIdentityDocumentSchema.findOneAndRemove({_id: id})
        res.status(200).json({message: `id: ${id} has been deleted`})
        }catch(err){
            res.status(500).json({
                message: "Id del usuario no se encontró."
            })
        }
}

module.exports = {getTypeIdentityDocument, insertTypeIdentityDocument, updateTypeIdentityDocument, deleteTypeIdentityDocument}