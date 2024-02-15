import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { setContext } from '@apollo/client/link/context';
import { useCookies } from 'react-cookie';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink,} from '@apollo/client'

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql',
});

// const client = new ApolloClient({
//   uri: 'http://localhost:4000',
//   cache: new InMemoryCache(),
// })
const [cookies] = useCookies(['token']);

  const authLink = setContext((_, { headers }) => {
    const token = cookies.token || '';
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


ReactDOM.createRoot(document.getElementById("root") as Element).render(

<ApolloProvider client={client}>
    <App />
</ApolloProvider>

);
