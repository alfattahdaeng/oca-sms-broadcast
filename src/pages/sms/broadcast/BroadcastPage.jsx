import React from "react";
import OCALayout from "../../../components/OCALayout/OCALayout";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  my3: {
    margin: "1.3rem 0"
  },
  mb0: {
    marginBottom: 0
  },
  mRight: {
    marginRight: ".85rem"
  },
  p1: {
    padding: ".85rem"
  },
  titleShadow: {
    fontWeight: '900',
    fontSize: '32px',
    letterSpacing: '0.002em',
    color: '#3D3D3D',
    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    marginBottom: '20px',
  },
}));

const BroadcastPage = props => {
  const classes = useStyles();

  return (
    <OCALayout>
      <Typography className={classes.titleShadow} variant="h1">
        Broadcast
      </Typography>
      <Typography variant="h6">
        Nothing here
      </Typography>
    </OCALayout>
  );
};

export default BroadcastPage;
