import ScoreCard from "../../models/ScoreCard.js";

const clear = async () => { 
    try {
        await ScoreCard.deleteMany({});
        return ("Database cleared");
    } catch (e) { 
        throw new Error("Database deletion failed"); 
    }
   
};

export default clear;