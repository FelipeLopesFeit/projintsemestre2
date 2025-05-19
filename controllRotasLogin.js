import jwt from 'jsonwebtoken';
import { read, compare } from '../database/database.js';
import { JWT_SECRET } from '../database/jwt.js';

const loginAlunoController = async (req, res) => {
    const { RA_aluno, senha_aluno } = req.body;

    try {
        const Aluno = await read('Aluno', `RA_aluno = '${RA_aluno}'`);

        if (!Aluno) {
            return res.status(404).json({ mensagem: 'Usuário não encontrado' });
        }

        const senhaCorreta = await compare(senha_aluno, Aluno.senha_aluno);

        if (!senhaCorreta) {
            return res.status(401).json({ mensagem: 'Senha incorreta' });
        }

        const token = jwt.sign({ id: Aluno.id, tipo: Aluno.tipo }, JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ mensagem: 'Login realizado com sucesso', token });
    } catch (err) {
        console.error('Erro ao fazer login: ', err);
        res.status(500).json({ mensagem: 'Erro ao fazer login' });
    }
};

const loginCoordenadorController = async (req, res) => {
    const { CPF_coordenador, senha_coordenador } = req.body;

    try {
        const Coordenador = await read('Coordenador', `CPF_coordenador = '${CPF_coordenador}'`);

        if (!Coordenador) {
            return res.status(404).json({ mensagem: 'Usuário não encontrado' });
        }

        const senhaCorreta = await compare(senha_coordenador, Coordenador.senha_coordenador);

        if (!senhaCorreta) {
            return res.status(401).json({ mensagem: 'Senha incorreta' });
        }

        const token = jwt.sign({ id: Coordenador.id, tipo: Coordenador.tipo }, JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ mensagem: 'Login realizado com sucesso', token });
    } catch (err) {
        console.error('Erro ao fazer login: ', err);
        res.status(500).json({ mensagem: 'Erro ao fazer login' });
    }
};

const loginProfessorController = async (req, res) => {
    const { CPF_professor, senha_professor } = req.body;

    try {
        const Professor = await read('Professor', `CPF_professor = '${CPF_professor}'`);

        if (!Professor) {
            return res.status(404).json({ mensagem: 'Usuário não encontrado' });
        }

        const senhaCorreta = await compare(senha_professor, Professor.senha_professor);

        if (!senhaCorreta) {
            return res.status(401).json({ mensagem: 'Senha incorreta' });
        }

        const token = jwt.sign({ id: Professor.id, tipo: Professor.tipo }, JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ mensagem: 'Login realizado com sucesso', token });
    } catch (err) {
        console.error('Erro ao fazer login: ', err);
        res.status(500).json({ mensagem: 'Erro ao fazer login' });
    }
};

export { loginCoordenadorController, loginProfessorController, loginAlunoController };
