import ScoreCard from "../../models/ScoreCard";

const query = async (name, subject, score) => {
    const existing = await ScoreCard.findOne({ name: name, subject: subject }); 
    if (existing) {
        await ScoreCard.updateOne({ name: name, subject: subject }, { score: score });
        return ("updating");
    }
    else {
        const newScoreCard = new ScoreCard({ name: name, subject: subject, score: score}); 
        return newScoreCard.save();
    }  
};

export default query;