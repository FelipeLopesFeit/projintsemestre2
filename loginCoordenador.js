import express from "express";
import { loginCoordenadorController } from "../controllersrotas/controllRotasLogin.js"

const rota = express.Router()

rota.post('/logincoordenador', loginCoordenadorController)

export default rota