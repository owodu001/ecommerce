import React from "react";
// import { storiesOf } from "@storybook/react";

import { Grommet, Grid } from "grommet";
import { grommet } from "grommet/themes";
import ProductCard from "./ProductCard";

const ProductGrid = () => (
  <Grommet theme={grommet} full>
    <Grid
      columns={{
        count: 4,
        size: "auto"
      }}
      gap="small"
    >
  <ProductCard> </ProductCard>
  <ProductCard> </ProductCard>
  <ProductCard> </ProductCard>
  <ProductCard> </ProductCard>

    </Grid>
  </Grommet>
);

// export default ("Grid", module).add("N-column layout", () => <ProductGrid />);
export default ProductGrid