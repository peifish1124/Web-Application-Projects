const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    from: {
        type: String,
        required: [true, "From field is required."],
    },
    to: {
        type: String,
        required: [true, "To field is required"],
    },
    body: {
        type: String,
        required: [true, "Body field is required."],
    },
});

const Message = mongoose.model("message", MessageSchema);

module.exports = Message;
