import mongoose from 'mongoose';

const donacionSchema = new mongoose.Schema({
    _id: Number,
    cantidad: Number,
    description: String,
    tipoDonacion: String,
    tipoBeneficiario: Number,
    recibidas: Number,
    benefactor: Number,
    campana: Number,
    recolector: Number,
    fechaDonacion: Date,
    estado: Number,
    fechaRegistro: Date,
    fechaActualizada: Date
});

const Donation = mongoose.model('donacion', donacionSchema);

export default Donation;