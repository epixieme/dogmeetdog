import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import {  ApolloClient, InMemoryCache, gql  } from '@apollo/client'

// const client = new ApolloClient({
//   uri: 'http://localhost:4000',
//   cache: new InMemoryCache(),
// })

// const query = gql`
// query {
//   allDogs {
//     description,
//     id,
//     likes,
//     name
//   }
// }
// `
// client.query({ query })
//   .then((response) => {
//     console.log(response.data)
//   })



function App() {
  // const result = useQuery(ALL_DOGS)
  return <RouterProvider router={router} />
}

export default App;
