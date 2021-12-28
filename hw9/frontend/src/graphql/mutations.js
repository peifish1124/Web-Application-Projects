import { gql } from "@apollo/client";

export const CREATE_MESSAGE_MUTATION = gql`
    mutation createMessage($from: String!, $to: String!, $body: String!) {
        CreateMessage(data: { from: $from, to: $to, body: $body }) {
            from
            to
            body
        }
    }
`;

export const CLEAR_MESSAGE_MUTATION = gql`
    mutation clearMessage($user: String!) {
        ClearMessage(user: $user) {
            from
            to
            body
        }
    }
`;
