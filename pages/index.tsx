import { Button, Card, Container, Text } from "@nextui-org/react";
import { signIn, signOut, useSession } from "next-auth/react";
const Home = () => {
  const { data: session } = useSession();
  console.log(session);

  if (!session) {
    return (
      <div>
        <Button onClick={() => signIn()}>Sign in with Github</Button>
      </div>
    );
  } else {
    return (
      <Card css={{ backgroundColor: "$purple300" }}>
        <Text css={{ backgroundColor: "$white", fontSize: "$2xl" }}>
          Signed in with {session.user?.email}
        </Text>
        <Button onClick={() => signOut()}>Sign Out</Button>
      </Card>
    );
  }
};

export default Home;
