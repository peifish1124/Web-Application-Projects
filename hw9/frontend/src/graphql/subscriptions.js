import { gql } from "@apollo/client";

export const MESSAGE_SUBSCRIPTION = gql`
    subscription {
        Messages {
            mutation
            data {
                from
                to
                body
            }
        }
    }
`;