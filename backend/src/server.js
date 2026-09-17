import express from 'express';
import cors from 'cors';
import pool from './db.js';

const app = express();

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ status: 'API Barbearia rodamdo' });
});

app.get('/produtos', async (req, res) => {
    try {
        const [rows] = await pool.query(
            'SELECT id, nome, preco, marca FROM produtos ORDER BY id'
        );
        res.json(rows);
    } catch (err) {
        console.error('Erro ao buscar produtos:', err);
        res.status(500).json({ error: 'Erro ao buscar produtos' });
    }
});

app.get('/servicos', async (req, res) => {
    try {
        const [rows] = await pool.query(
            'SELECT id, nome, preco FROM servicos ORDEY BY id'
        );
        res.json(rows);
    } catch (err) {
        console.error('Erro ao buscar serviços:', err);
        res.status(500).json({ error: 'Erro ao buscar serviços' });
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`API rodando na porta: ${PORT}`);
});
