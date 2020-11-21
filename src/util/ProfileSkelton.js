import React from "react";
import noImg from "../images/noImg.png";
//MUI stuff
import { Paper, withStyles } from "@material-ui/core";
//icons
import LinkIcon from "@material-ui/icons/Link";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const styles = {
  profile: {
    "& .image-wrapper": {
      textAlign: "center",
      position: "relative",
      "& button": {
        position: "absolute",
        top: "80%",
        left: "70%",
      },
    },
    "& .profile-image": {
      width: 200,
      height: 200,
      objectFit: "cover",
      maxWidth: "100%",
      borderRadius: "50%",
    },
    "& .profile-details": {
      textAlign: "center",
      "& span, svg": {
        verticalAlign: "middle",
      },
      "& a": {
        color: "#00bcd4",
      },
    },
    "& hr": {
      border: "none",
      margin: "0 0 10px 0",
    },
    "& svg.button": {
      "&:hover": {
        cursor: "pointer",
      },
    },
  },
  card: {
    display: "flex",
    marginBottom: 20,
  },
  cardContent: {
    width: "100%",
    flexDirection: "column",
    padding: 25,
  },
  cover: {
    minWidth: 200,
    objectFit: "cover",
  },
  handle: {
    width: 60,
    height: 18,
    backgroundColor: "00bcd4",
    marginBottom: 7,
  },
  date: {
    height: 14,
    width: 100,
    backgroundColor: "rgba(0,0,0, 0.3)",
    marginBottom: 10,
  },
  fullLine: {
    height: 15,
    width: "90%",
    backgroundColor: "rgba(0,0,0, 0.6)",
    marginBottom: 10,
  },
  halfLine: {
    height: 15,
    width: "50%",
    backgroundColor: "rgba(0,0,0, 0.6)",
    marginBottom: 10,
  },
};

const ProfileSkelton = (props) => {
  const { classes } = props;
  return (
    <Paper className={classes.paper}>
      <div className={classes.profile}>
        <div className="image-wrapper">
          <img src={noImg} alt="Profile" className="profile-image" />
        </div>
        <hr />
        <div className="profile-details">
          <div className={classes.handle}>
            <div className={classes.handle} />
            <hr />
            <div className={classes.fullLine} />
            <div className={classes.fullLine} />
            <hr />
            <LocationOnIcon color="primary" />
            <hr />
            <LinkIcon color="primary" />
          </div>
        </div>
      </div>
    </Paper>
  );
};

export default withStyles(styles)(ProfileSkelton);
