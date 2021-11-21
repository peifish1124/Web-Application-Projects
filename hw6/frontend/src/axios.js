import axios from 'axios';
const instance = axios.create({ baseURL: 'http://localhost:4000/api/guess' });
const startGame = async (setHasStarted) => {
    setHasStarted(true);
    const { data: { msg }} = await instance.post('/start');
    return msg;
}
const guess = async (number) => {
    try {
        const { data: { msg }} = await instance.get('/guess', { params : { number }})
        return msg;
    }
    catch (error) {
        console.log("error");
        return ("Error: '"+number+"' is not a valid number (1 - 100)");
    }
}
const restart = async (setHasWon,setStatus,setNumber) => {
    setHasWon(false);
    setStatus('');
    setNumber('');
    const { data: { msg }} = await instance.post('/restart');
    return msg;
};
export {startGame, guess, restart};