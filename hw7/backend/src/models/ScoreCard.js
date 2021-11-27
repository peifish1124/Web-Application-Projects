//Import the mongoose module
import mongoose from 'mongoose';

//Define a schema
const Schema = mongoose.Schema;

// 新增 ScoreCard 的 Schema 
const ScoreCardSchema = new Schema({
    name: {type: String, required: true},
    subject:{type: String, required: true},
    score:{type: Number, required: true}
});

const ScoreCard = mongoose.model("ScoreCard", ScoreCardSchema);

export default ScoreCard;