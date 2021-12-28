const Subscription = {
    Messages: {
        subscribe(parent, args, { pubsub }, info){
            return pubsub.asyncIterator('Messages')
        }
    }
}

export {Subscription as default}