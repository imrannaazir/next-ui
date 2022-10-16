import React from "react";
import { Button, Card, Text } from "@nextui-org/react";
import { signIn, signOut, useSession } from "next-auth/react";
const dashboard = () => {
  // useSession hook returns two. 1. session, 2. status = loading /authenticated or unauthenticated
  const { data: session, status } = useSession({
    // kono page k required korte hole useSession hook ar invoked ar shomai akta object ar property required equal true kore dite hobe.
    required: true,
    onUnauthenticated() {
      // The user is not authenticated, handle it here.
      alert(`Please sign in!`);
    },
  });
  console.log(status);

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

export default dashboard;
