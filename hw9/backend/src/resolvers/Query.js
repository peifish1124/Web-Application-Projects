import Message from "./../models/message";
const Query = {
    async Messages(parent, args, _) {
        const data = await Message.find({
            $or: [{ from: args.from }, { to: args.to }],
        }).sort({ _id: 1 });
        // console.log(data);
        return data;
    },
};

export { Query as default };
