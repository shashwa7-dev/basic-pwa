import { Button, Heading } from "@chakra-ui/react";
import Page from "./components/common/Page";
import { usePrivy } from "@privy-io/react-auth";

const Home = () => {
  const { ready, authenticated, user, login, logout } = usePrivy();

  // Wait until the Privy client is ready before taking any actions
  if (!ready) {
    return null;
  }

  return (
    <Page>
      <Heading>Home Page</Heading>
      <br />
      <br />
      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsa
        enim ullam animi vel totam provident ut quam, atque fuga iure id,
        repellat exercitationem doloremque excepturi suscipit tempora tenetur
        asperiores! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Natus, ipsa enim ullam animi vel totam provident ut quam, atque fuga
        iure id, repellat exercitationem doloremque excepturi suscipit tempora
        tenetur asperiores!
      </span>
      {ready && authenticated ? (
        <div>
          <textarea
            readOnly
            value={JSON.stringify(user, null, 2)}
            style={{ width: "600px", height: "250px", borderRadius: "6px" }}
          />
          <br />
          <Button onClick={logout}>Log Out</Button>
        </div>
      ) : (
        <Button onClick={login}>Log In</Button>
      )}
    </Page>
  );
};

export default Home;
