import type { NextPage } from "next";
import { Avatar, Button, Text } from "@nextui-org/react";

const Home: NextPage = () => {
  return (
    <div>
      <Button>Click me</Button>
      <Avatar
        src="https://i.pravatar.cc/150?u=a04258114e29026702d"
        css={{ size: "$20" }}
      />
      <Text css={{ color: "$emonColor", background: "$blue800" }}>
        Hello world
      </Text>
      <Text
        h1
        size={60}
        css={{ textGradient: "45deg, $purple600 -20%, $red500 50%" }}
      >
        I am Emon
      </Text>
    </div>
  );
};

export default Home;
