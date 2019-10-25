import gql from "graphql-tag";

export const JOBS = gql`
  query jobs {
    jobs {
      id
      title
      slug
      company {
        id
        name
        slug
      }
      cities {
        id
        name
      }
      remotes {
        id
        name
      }
    }
  }
`;

export const JOB = gql`
  query job($input: JobInput!) {
    job(input: $input) {
      id
      title
      slug
      description
      applyUrl
      company {
        id
        name
        slug
      }
      cities {
        id
        name
      }
      remotes {
        id
        name
      }
    }
  }
`;
