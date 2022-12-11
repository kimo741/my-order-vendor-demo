// import gql from "graphql-tag";
// import { useQuery, useResult } from "@vue/apollo-composable";
// // let auth_vendor;
// // let auth_vendor = window.localStorage.getItem("auth_vendor")
// export const location = (id) => {
//   const { result, loading, error } = useQuery(gql`
// query getById($auth_vendor:ID!){
//     allVendorProducts(auth_vendor_id:$auth_vendor){
//        id,
//        name,
//        vendor_id,
//        status,
//     }
// }
//   `,
//   {
//     auth_vendor: id
//   });
//   const locations = useResult(result, null, (data) => data);
//   return{
//     locations
//   }
// }
