import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
  },
  id : Number,
  nombre: String,
  apellido: String,
  segundoApellido: String,
  ci: String,
  correoElectrónico: String,
  celular: Number,
  usuario: String,
  contraseña: String,
  nit: String,
  representaPrincipal: String,
  direccion: String,
  telefono: Number,
  latitud: String,
  longitud: String,
  rol: String,
  estado: Number,
  fechaRegistro: Date,
  fechaActualizada: Date
});

const User = mongoose.model('usuarios', userSchema);

export default User;