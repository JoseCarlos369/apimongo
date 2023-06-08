//import request from 'request';
//import async from 'async';
import express from 'express';
import mongoose from 'mongoose'; 
import User from './models/usuario.js';
import Crackdown from './models/compana.js';
import Donation from './models/donacion.js';

const app = express();
app.use(express.json());

// Conexión a la base de datos en MongoDB
mongoose.connect('mongodb+srv://asiloAnsianos12:RVyzJyKxKhoE7JWl@asilodb.xonlyfh.mongodb.net/AsilosAncianos?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conexión exitosa a MongoDB');
}).catch((err) => {
    console.error('Error al conectar a MongoDB: ', err);
});


// Ruta para realizar:

//Login
app.post('/login', async (req, res, next) => {
    try {
        const { usuario, contraseña } = req.body;
        const user = await User.findOne({ usuario, contraseña });
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json(user);
    } catch (err) {
        return next(err);
    }
});

// Esquema Usuario Mongo
// Insertar usuario
app.post('/iUser', async (req, res, next) => {
    try {
        const userData = req.body;
        const user = new User(userData);
        await user.save();
        res.json({ message: 'Usuario guardado exitosamente' });
    } catch(err) {
        return next(err);
    }
});
// Obtener usuarios
app.get('/gUsers', async (req, res, next) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch(err) {
        return next(err);
    }
});
// Editar usuario
app.put('/eUser/:id', async (req, res, next) => { 
    try {
        const { id } = req.params;
        const userData = req.body; 
        const user = await User.findByIdAndUpdate(id, userData, { new: true });
        res.json({ message: 'Usuario modificado exitosamente' });
    } catch(err) {
        return next(err);
    }
});
// Eliminar usuario
app.delete('/dUser/:id', async (req, res, next) => { 
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.json({ message: 'Usuario eliminado exitosamente' });
});

// Esquema Campaña Mongo
// Insertar campaña
app.post('/iCrackdown', async (req, res, next) => {
    try {
        const crackdownData = req.body;
        const crackdown = new Crackdown(crackdownData);
        await crackdown.save();
        res.json({ message: 'Campaña guardada exitosamente' });
    } catch(err) {
        return next(err);
    }
});
// Obtener campaña
app.get('/gCrackdowns', async (req, res, next) => {
    try {
        const crackdowns = await Crackdown.find();
        res.json(crackdowns);
    } catch(err) {
        return next(err);
    }
});
// Editar campaña
app.put('/eCrackdown/:id', async (req, res, next) => { 
    try {
        const { id } = req.params;
        const crackdownData = req.body; 
        const crackdown = await Crackdown.findByIdAndUpdate(id, crackdownData, { new: true });
        res.json({ message: 'Campaña modificada exitosamente' });
    } catch(err) {
        return next(err);
    }
});
// Eliminar campaña
app.delete('/dCrackdown/:id', async (req, res, next) => { 
    const { id } = req.params;
    await Crackdown.findByIdAndDelete(id);
    res.json({ message: 'Campaña eliminada exitosamente' });
});

// Esquema Doanción Mongo
// Insertar donación
app.post('/iDonation', async (req, res, next) => {
    try {
        const donationData = req.body;
        const donation = new Donation(donationData);
        await donation.save();
        res.json({ message: 'Donación guardada exitosamente' });
    } catch(err) {
        return next(err);
    }
});
// Obtener donación
app.get('/gDonations', async (req, res, next) => {
    try {
        const donations = await Donation.find();
        res.json(donations);
    } catch(err) {
        return next(err);
    }
});
// Editar donacion
app.put('/eDonation/:id', async (req, res, next) => { 
    try {
        const { id } = req.params;
        const donationData = req.body; 
        const donation = await Donation.findByIdAndUpdate(id, donationData, { new: true });
        res.json({ message: 'Donación modificada exitosamente' });
    } catch(err) {
        return next(err);
    }
});
// Eliminar donación
app.delete('/dDonation/:id', async (req, res, next) => { 
    const { id } = req.params;
    await Donation.findByIdAndDelete(id);
    res.json({ message: 'Donación eliminada exitosamente' });
});


// Inicia el servidor
app.listen(8010, () => {
    console.log('Servidor escuchando en el puerto 8010');
});