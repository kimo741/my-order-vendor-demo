import gql from "graphql-tag";
import { useQuery, useResult } from "@vue/apollo-composable";
export const location = () => {
  const { result, loading, error } = useQuery(gql`
  query {
    locations {
      name
      id
    }
  }
  `);
  const locations = useResult(result, null, (data) => data.locations);
  return{
    locations
  }
}
