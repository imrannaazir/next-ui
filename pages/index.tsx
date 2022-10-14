import type { NextPage } from "next";
import { Avatar, Button } from "@nextui-org/react";

const Home: NextPage = () => {
  return (
    <div>
      <Button>Click me</Button>
      <Avatar
        src="https://i.pravatar.cc/150?u=a04258114e29026702d"
        css={{ size: "$20" }}
      />
    </div>
  );
};

export default Home;
