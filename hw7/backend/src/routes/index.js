import express from 'express';
import add from './api/add';
import clear from './api/clear';
import query from './api/query';

const router = express.Router();

router.post('/create-card', async (req, res) => {
    const name = req.body.name;
    const subject = req.body.subject;
    const score = parseInt(req.body.score);

    var card = await add(name, subject, score);
    if(card === 'updating'){
        res.json({ message: `Updating (${name}, ${subject}, ${score})`,card: card });
    } else{
        res.json({ message: `Adding (${name}, ${subject}, ${score})`,card: card });
    } 
})
router.delete('/clear-db', async (req, res) => {
    var result = await clear();
    res.json({ message: result });
})
router.get('/query-cards', async (req, res) => {
})
export default router;