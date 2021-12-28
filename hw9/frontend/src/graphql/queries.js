import { gql } from "@apollo/client";

export const MESSAGE_QUERY = gql`
    query GetMessage($from: String!, $to: String!) {
        Messages(from: $from, to: $to) {
            from
            to
            body
        }
    }
`;