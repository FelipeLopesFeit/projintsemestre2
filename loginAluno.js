import express from "express";
import { loginAlunoController } from "../controllersrotas/controllRotasLogin.js"

const rota = express.Router()

rota.post('/loginaluno', loginAlunoController)

export default rota