import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client/core";
import { createApolloProvider } from "@vue/apollo-option";

// Types
import type { App } from "vue";


export function apolloBootstrap(app: App) {

    // HTTP connection to the API
    const httpLink = createHttpLink({

        uri: "http://localhost:3000/graphql"
    });

    // Cache implementation
    const cache = new InMemoryCache();

    // Create the apollo client
    const apolloClient = new ApolloClient({

        link: httpLink,
        cache
    });

    const apolloProvider = createApolloProvider({

        defaultClient: apolloClient
    });

    app.use(apolloProvider);
}