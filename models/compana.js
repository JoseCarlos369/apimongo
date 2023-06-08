import mongoose from 'mongoose';

const campanaSchema = new mongoose.Schema({
    _id: Number,
    nombre: String,
    requerimiento: String,
    fechaInicio: String,
    fechaCierre: String,
    imagenes: Array,
    usuarios: Number,
    estado: Number,
    fechaRegistro: Date,
    fechaActualizada: Date
});

const Crackdown = mongoose.model('Crackdown', campanaSchema);

export default Crackdown;