
const typeDocumentSchema = require("../models/type_document")

const getTypeDocument = async(req, res) => {
    try{
        const id = req.query.id || false
        if (!!id){
        const typeDocument = await typeDocumentSchema.find({_id: id})
        res.status(200).json(typeDocument)}
        else{
            const typeDocuments = await typeDocumentSchema.find()
            res.status(200).json(typeDocuments)
        }
    }catch(err){
        res.status(500).json({
            message: "No se pudó mostrar datos."
        })
    }
}

const insertTypeDocument = async (req, res) => {
    try{
        const typeDocument = typeDocumentSchema(req.body);
        await typeDocument.save()
        res.status(200).json(typeDocument)
    }catch(error){       
        res.status(500).json({'error' : 'Error al crear usuario'})        
    }
}

const updateTypeDocument = async (req, res) => {
    try{
    const id = req.query.id || false
    await typeDocumentSchema.findOneAndUpdate({_id: id}, req.body)
    const typeDocument = await typeDocumentSchema.find({_id: id})
    res.status(200).json(typeDocument)
    }catch(err){
        res.status(500).json({
            message: "Usuario no se encontró."
        })
    }
}

const deleteTypeDocument = async (req, res) => {
    try{
        const id = req.query.id || false
        await typeDocumentSchema.findOneAndRemove({_id: id})
        res.status(200).json({message: `id: ${id} has been deleted`})
        }catch(err){
            res.status(500).json({
                message: "Id del usuario no se encontró."
            })
        }
}

module.exports = {getTypeDocument, insertTypeDocument, updateTypeDocument, deleteTypeDocument}