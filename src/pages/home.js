import Grid from "@material-ui/core/Grid";
import React, { Component } from "react";
import Profile from "../components/profile/Profile";
import Scream from "../components/scream/Scream";
import ScreamSkelton from "../util/ScreamSkelton";
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
            <ScreamSkelton />
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
