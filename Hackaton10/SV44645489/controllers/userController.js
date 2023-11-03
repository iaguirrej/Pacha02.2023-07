const userSchema = require("../models/user")

const getUser = async(req, res) => {
    try{
        const id = req.query.id || false
        if (!!id){
        const user = await userSchema.find({_id: id})
        res.status(200).json(user)}
        else{
            const users = await userSchema.find()
            res.status(200).json(users)
        }
    }catch(err){
        res.status(500).json({
            message: "No se pudó mostrar datos."
        })
    }
}

const insertUser = async(req, res) => {    
    try{       
        const user = await userSchema(req.body);
        await user.save()       
        res.status(200).json(user)
    }catch(error){       
        res.status(500).json({'error' : 'Error al crear usuario'})        
    }
}

const updateUser = async (req, res) => {
    try{
    const id = req.query.id || false
    await userSchema.findOneAndUpdate({_id: id}, req.body)
    const user = await userSchema.find({_id: id})
    res.status(200).json(user)
    }catch(err){
        res.status(500).json({
            message: "Usuario no se encontró."
        })
    }
}

const deleteUser = async (req, res) => {
    try{
        const id = req.query.id || false
        await userSchema.findOneAndRemove({_id: id})
        res.status(200).json({message: `id: ${id} has been deleted`})
        }catch(err){
            res.status(500).json({
                message: "Id del usuario no se encontró."
            })
        }
}

module.exports = {getUser, insertUser, updateUser, deleteUser}