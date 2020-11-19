import Grid from "@material-ui/core/Grid";
import React, { Component } from "react";
import Profile from "../components/Profile";
import Scream from "../components/Scream";
//redux
import { connect } from "react-redux";
import { getScreams } from "../redux/actions/dataActions";

class home extends Component {
  componentDidMount() {
    this.props.getScreams();
  }

  render() {
    const { loading, screams } = this.props.data;
    return (
      <Grid container spacing={10}>
        <Grid item sm={8} xs={12}>
          {!loading ? (
            screams.map((scream) => (
              <Scream key={scream.screamId} scream={scream} />
            ))
          ) : (
            <p>Loading...</p>
          )}
        </Grid>
        <Grid item sm={4} xs={12}>
          <Profile />
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps, { getScreams })(home);
