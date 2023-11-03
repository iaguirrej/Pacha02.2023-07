
const unitMeasurementSchema = require("../models/unit_measurement")

const getUnitMeasurement = async(req, res) => {
    try{
        const id = req.query.id || false
        if (!!id){
        const unitMeasurement = await unitMeasurementSchema.find({_id: id})
        res.status(200).json(unitMeasurement)}
        else{
            const unitMeasurements = await unitMeasurementSchema.find()
            res.status(200).json(unitMeasurements)
        }
    }catch(err){
        res.status(500).json({
            message: "No se pudó mostrar datos."
        })
    }
}

const insertUnitMeasurement = async (req, res) => {
    try{
        const unitMeasurement = unitMeasurementSchema(req.body);
        await unitMeasurement.save()
        res.status(200).json(unitMeasurement)
    }catch(error){       
        res.status(500).json({'error' : 'Error al crear usuario'})        
    }
}

const updateUnitMeasurement = async (req, res) => {
    try{
    const id = req.query.id || false
    await unitMeasurementSchema.findOneAndUpdate({_id: id}, req.body)
    const unitMeasurement = await unitMeasurementSchema.find({_id: id})
    res.status(200).json(unitMeasurement)
    }catch(err){
        res.status(500).json({
            message: "Usuario no se encontró."
        })
    }
}

const deleteUnitMeasurement = async (req, res) => {
    try{
        const id = req.query.id || false
        await unitMeasurementSchema.findOneAndRemove({_id: id})
        res.status(200).json({message: `id: ${id} has been deleted`})
        }catch(err){
            res.status(500).json({
                message: "Id del usuario no se encontró."
            })
        }
}

module.exports = {getUnitMeasurement, insertUnitMeasurement, updateUnitMeasurement, deleteUnitMeasurement}