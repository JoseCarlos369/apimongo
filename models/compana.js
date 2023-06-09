import mongoose from 'mongoose';

const campanaSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
    },
    id: Number,
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

const Crackdown = mongoose.model('campana', campanaSchema);

export default Crackdown;