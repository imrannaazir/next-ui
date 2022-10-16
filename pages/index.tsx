import { Card, Grid, Text } from "@nextui-org/react";

const Home = () => {
  return (
    <div>
      <Text
        css={{
          backgroundColor: "$white",
          color: "$purple500",
          fontSize: "$5xl",
        }}
      >
        This is Home page
      </Text>
      <Grid.Container gap={2}>
        <Grid xs={4}>
          <Card>
            <Card.Body>
              <Text>Default card. (shadow)</Text>
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={4}>
          <Card variant="flat">
            <Card.Body>
              <Text>Flat card.</Text>
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={4}>
          <Card variant="bordered">
            <Card.Body>
              <Text>Bordered card.</Text>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </div>
  );
};

export default Home;
