import React, { Component } from "react";
import { editUserDetails } from "../../redux/actions/userActions";
import MyButton from "../../util/MyButton";
//MUI stuff
import withStyles from "@material-ui/core/styles/withStyles";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
//icons
import EditIcon from "@material-ui/icons/Edit";
//redux
import { connect } from "react-redux";

const styles = {
  button: {
    float: "right",
  },
  textField: {
    margin: "10px auto 10px auto",
  },
};

class EditDetails extends Component {
  state = {
    bio: "",
    location: "",
    website: "",
    open: false,
  };

  mapUserDetailsToState = (credentials) => {
    this.setState({
      bio: credentials.bio ? credentials.bio : "",
      location: credentials.location ? credentials.location : "",
      website: credentials.website ? credentials.website : "",
    });
  };

  componentDidMount() {
    const { credentials } = this.props;
    this.mapUserDetailsToState(credentials);
  }

  handleOpen = () => {
    this.setState({ open: true });
    this.mapUserDetailsToState(this.props.credentials);
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const userDetails = {
      bio: this.state.bio,
      location: this.state.location,
      website: this.state.website,
    };
    this.props.editUserDetails(userDetails);
    this.handleClose();
  };

  render() {
    const { classes } = this.props;
    const { open, bio, location, website } = this.state;
    return (
      <>
        <MyButton
          tip="Edit Details"
          onClick={this.handleOpen}
          btnClassName={classes.button}
        >
          <EditIcon color="primary" />
        </MyButton>
        <Dialog open={open} onClose={this.handleClose} fullWidth maxWidth="sm">
          <DialogTitle>Edit Your Details</DialogTitle>
          <DialogContent>
            <form>
              <TextField
                name="bio"
                type="text"
                label="Bio"
                multiline
                rows="3"
                placeholder="short bio about you"
                className={classes.textField}
                value={bio}
                onChange={this.handleChange}
              />
              <TextField
                name="location"
                type="text"
                label="Location"
                placeholder="your location"
                className={classes.textField}
                value={location}
                onChange={this.handleChange}
              />
              <TextField
                name="website"
                type="text"
                label="Website"
                placeholder="your personal/professional website"
                className={classes.textField}
                value={website}
                onChange={this.handleChange}
              />
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleSubmit} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  credentials: state.user.credentials,
});

const mapActionsToProps = { editUserDetails };

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(EditDetails));
