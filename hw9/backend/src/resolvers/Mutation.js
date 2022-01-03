import Message from "../db";
const Mutation = {
    async CreateMessage(parent, args, { db, pubsub }, info) {
        const temp = {
            ...args.data,
        };
        const msg = new Message(temp);
        await msg.save();
        pubsub.publish("Messages", {
            Messages: {
                mutation: "CREATED",
                data: {
                    from: args.data.from,
                    to: args.data.to,
                    body: args.data.body,
                },
            },
        });
        return args;
    },
    async ClearMessage(parent, args, { db, pubsub }, info) {
        await Message.deleteMany({
            $or: [{ from: args.user }, { to: args.user }],
        });
        pubsub.publish("Messages", {
            Messages: {
                mutation: "CLEARED",
                data: {
                    from: "from field cleared",
                    to: "to field cleared",
                    body: "body field cleared",
                },
            },
        });
        return {
            from: "from field cleared",
            to: "to field cleared",
            body: "body field cleared",
        };
    },
};

export { Mutation as default };
