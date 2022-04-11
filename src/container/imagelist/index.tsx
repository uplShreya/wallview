import { Box, Grid } from "@mui/material";
import React from "react";
import DeviceListing from "../../components/imageList/DeviceListing";
import ImageListing from "../../components/imageList/ImageListing";

function Imagelist() {
  return (
    // <div>
    //   <ImageListing />
    // </div>

    // <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={1}>
      <Grid item xs={10}>
        <ImageListing />
      </Grid>
      <Grid item xs={2}>
        <DeviceListing />
      </Grid>
    </Grid>
    // </Box>
  );
}

export default Imagelist;
