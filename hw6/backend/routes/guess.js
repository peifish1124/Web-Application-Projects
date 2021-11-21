import express from 'express';
import {genNumber} from '../core/getNumber';
import {getNumber} from '../core/getNumber';

const router = express.Router();
const roughScale = (x, base) => {
    const parsed = parseInt(x, base);
    if (isNaN(parsed)) { return 0; }
    return parsed;
}

router.post('/start', (_, res) => {
    genNumber();
    res.json({ msg: 'The game has started.' });
})
router.get('/guess', (req, res) => {
    const num = getNumber();
    const guessed = roughScale(req.query.number, 10);
    //check if NOT a num or not in range [1,100]
    if (!guessed || guessed < 1 || guessed > 100){
        res.status(406).send({ msg: 'Not a legal number.'});
    } else if (num === guessed){
        res.json({ msg: 'Equal' });
    } else if (num < guessed) {
        res.json({ msg: 'Smaller' });
    } else if (num > guessed) {
        res.json({ msg: 'Bigger' });
    }
})
router.post('/restart', (_, res) => {
    genNumber();
    res.json({ msg: 'The game has started.' });
})
export default router;