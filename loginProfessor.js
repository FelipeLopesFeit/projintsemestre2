import express from "express";
import { loginProfessorController } from "../controllersrotas/controllRotasLogin.js"

const rota = express.Router()

rota.post('/loginprofessor', loginProfessorController)

export default rota