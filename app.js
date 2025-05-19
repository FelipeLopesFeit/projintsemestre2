import express from 'express';
const app = express();
const port = 3000;
import cors from 'cors'

import rotaAluno from './rotas/loginAluno.js'
import rotaProfessor from './rotas/loginProfessor.js'
import rotaCoordenador from './rotas/loginCoordenador.js'

app.use(cors())
app.use(express.json())

app.use('/professor', rotaProfessor);
app.use('/aluno', rotaAluno)
app.use('/coordenador', rotaCoordenador)

app.get('/', (req,res) => {
    res.status(200).send(`Ìnicio`)
});

app.use((req,res) => {
    res.status(404).json({ mensagem: 'Rota não encontrada.' })
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
})