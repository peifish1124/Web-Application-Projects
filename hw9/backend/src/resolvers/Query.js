import Message from "../db";
const Query = {
    async Messages(parent, args, _) {
        const data = await Message.find({
            $or: [{ from: args.from }, { to: args.to }],
        }).sort({ _id: 1 });
        return data;
    },
};

export { Query as default };
