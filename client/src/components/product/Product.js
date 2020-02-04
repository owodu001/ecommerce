import React from "react";
import {
  Box,
  Grid,
  Tab,
  Tabs,
  Paragraph,
  Button,
  Image,
  Anchor,
  Nav
} from "grommet";

// import { Link } from "react-router-dom";

export default function() {
  return (
    <>
      {/* <Box
        justify="center"
        align="center"
        style={{ marginTop: "4rem" }}
        height="small"
        width="small"
      >
        
      </Box> */}

      <Box justify="center" align="center" style={{ marginTop: "4rem" }}>
        <Image
          fit="cover"
          src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg"
        />
        <Paragraph>
          {`You know, sometimes in life it seems like there's no way out. Like
      a sheep trapped in a maze designed by wolves.`}
        </Paragraph>

        <Button label="Add to Cart" onClick={() => {}} />
      </Box>

      {/* <Nav direction="row" background="brand" pad="medium">
        <Anchor icon={<Icons.Home />} hoverIndicator />
        <Anchor icon={<Icons.Notification />} hoverIndicator />
        <Anchor icon={<Icons.ChatOption />} hoverIndicator />
      </Nav> */}

      <Grid
        rows={["xxsmall", "xsmall"]}
        columns={["xsmall", "small"]}
        gap="small"
        areas={[
          { name: "header", start: [0, 0], end: [1, 0] },
          { name: "nav", start: [0, 1], end: [0, 1] },
          { name: "main", start: [1, 1], end: [1, 1] }
        ]}
      >
        <Box gridArea="header" background="brand" />
        <Box gridArea="nav" background="light-5" />
        <Box gridArea="main" background="light-2" />
      </Grid>

      <Tabs>
        <Tab title="tab 1">
          <Box pad="medium">One</Box>
        </Tab>
        <Tab title="tab 2">
          <Box pad="medium">Two</Box>
        </Tab>
      </Tabs>
    </>
  );
}
