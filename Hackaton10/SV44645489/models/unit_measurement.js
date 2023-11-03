const mongoose = require("mongoose")

const unitMeasurementSchema = mongoose.Schema({
    dsUniMean: {
        type: String,
        require: true,       
    },
    multiple:{
        type: Number,
        default: 0.0
    }
},
{
    timestamps: true,
    versionKey: false
}
)

module.exports = mongoose.model('unit_measurement', unitMeasurementSchema, 'unit_measurement')