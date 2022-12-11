import gql from "graphql-tag";
import { useQuery, useResult , useMutation } from "@vue/apollo-composable";
// let auth_vendor;
// let auth_vendor = window.localStorage.getItem("auth_vendor")
export const allProducts = (id) => {
  const { result, loading, error } = useQuery(gql`
query getById($auth_vendor:ID!){
    allVendorProducts(auth_vendor_id:$auth_vendor){
      id,
      img:image
      name,
       vendor_id,
       status,
       price,
    }
}
  `,
  {
    auth_vendor: id
  });
  const getProducts = useResult(result, null, (data) => data.allVendorProducts);
  return{
    getProducts
  }
}
// export const updateProduct = async ( product , id) => {
//   const {  mutate: mutateProductUpdate } =  useMutation(gql` updateProduct($id:ID!,$producu_no_id:Opject!){
//     allVendorProducts(producu_no_id:$auth_vendor){
//       id,
//       img:image
//       name,
//        vendor_id,
//        status,
//        price,
//     }
// }
//   `,
//   {
//     id: id,
//     producu_no_id: product

//   });
//   // const updateProduct = useResult(result, null, (data) => data.allVendorProducts);
//   return{
//     mutateProductUpdate
//   }
// }
