import ScoreCard from "../../models/ScoreCard";

const query = async (type, queryString) => {
    var nameExisting, subExisting;
    var output = [];
    if(type === 'name'){
        nameExisting = await ScoreCard.find({ name: queryString });
        if(nameExisting.length === 0){
            return false;
        } else {
            for(var i = 0; i < nameExisting.length; i++){
                output[i] = `Found card with name: (${nameExisting[i].name},${nameExisting[i].subject},${nameExisting[i].score})`;
            }
            return output;
        } 
    } else {
        subExisting = await ScoreCard.find({ subject: queryString });
        if(subExisting.length === 0){
            return false;
        } else {
            for(var i = 0; i < subExisting.length; i++){
                output[i] = `Found card with subject: (${subExisting[i].name},${subExisting[i].subject},${subExisting[i].score})`;
            }
            return output;
        }
    }
};

export default query;