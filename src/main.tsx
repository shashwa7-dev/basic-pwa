import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./lib/theme.ts";
import "./index.css";
import { PrivyProvider, User } from "@privy-io/react-auth";

// This method will be passed to the PrivyProvider as a callback
// that runs after successful login.
const handleLogin = (user: User) => {
  console.log(`User ${user.id} logged in!`);
};
console.log(import.meta.env.VITE_PRIVY_APP_ID);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <PrivyProvider
        appId={import.meta.env.VITE_PRIVY_APP_ID}
        onSuccess={handleLogin}
        config={{
          loginMethods: ["email", "wallet", "apple", "google"],
          appearance: {
            theme: "dark",
            accentColor: "#676FFF",
            logo: "./",
            showWalletLoginFirst: false,
          },
        }}
      >
        <App />
      </PrivyProvider>
    </ChakraProvider>
  </React.StrictMode>
);
