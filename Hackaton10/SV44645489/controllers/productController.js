
const productSchema = require("../models/product")

const getProduct = async(req, res) => {
    try{
        const id = req.query.id || false
        if (!!id){
        const product = await productSchema.find({_id: id})
        res.status(200).json(product)}
        else{
            const products = await productSchema.find()
            res.status(200).json(products)
        }
    }catch(err){
        res.status(500).json({
            message: "No se pudó mostrar datos."
        })
    }
}

const insertProduct = async (req, res) => {
    try{       
        const product = productSchema(req.body);
        await product.save()
        res.status(200).json(product)
    }catch(error){       
        res.status(500).json({'error' : 'Error al crear usuario'})        
    }
}

const updateProduct = async (req, res) => {
    try{
    const id = req.query.id || false
    await productSchema.findOneAndUpdate({_id: id}, req.body)
    const product = await productSchema.find({_id: id})
    res.status(200).json(product)
    }catch(err){
        res.status(500).json({
            message: "Usuario no se encontró."
        })
    }
}

const deleteProduct = async (req, res) => {
    try{
        const id = req.query.id || false
        await productSchema.findOneAndRemove({_id: id})
        res.status(200).json({message: `id: ${id} has been deleted`})
        }catch(err){
            res.status(500).json({
                message: "Id del usuario no se encontró."
            })
        }
}

module.exports = {getProduct, insertProduct, updateProduct, deleteProduct}