import axios from "axios";
import React, { Component } from "react";
import StaticProfile from "../components/profile/StaticProfile";
import Scream from "../components/scream/Scream";
import ScreamSkelton from "../util/ScreamSkelton";
import ProfileSkelton from "../util/ProfileSkelton";
//MUI stuff
import { Grid } from "@material-ui/core";
//redux
import { connect } from "react-redux";
import { getUserData } from "../redux/actions/dataActions";

class user extends Component {
  state = {
    profile: null,
    screamIdParam: null,
  };

  componentDidMount() {
    const handle = this.props.match.params.handle;
    const screamId = this.props.match.params.screamId;
    if (screamId) this.setState({ screamIdParam: screamId });
    this.props.getUserData(handle);
    axios
      .get(`/user/${handle}`)
      .then((res) => {
        this.setState({ profile: res.data.user });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { screams, loading } = this.props.data;
    const { screamIdParam } = this.state;
    return (
      <Grid container spacing={10}>
        <Grid item sm={6} xs={8}>
          {loading ? (
            <ScreamSkelton />
          ) : screams === null ? (
            <p>No screams from user</p>
          ) : !screamIdParam ? (
            screams.map((scream) => (
              <Scream key={scream.screamId} scream={scream} />
            ))
          ) : (
            screams.map((scream) => {
              if (scream.screamId !== screamIdParam)
                return <Scream key={scream.screamId} scream={scream} />;
              else
                return (
                  <Scream key={scream.screamId} scream={scream} openDialog />
                );
            })
          )}
        </Grid>
        <Grid item sm={6} xs={8}>
          {this.state.profile === null ? (
            <ProfileSkelton />
          ) : (
            <StaticProfile profile={this.state.profile} />
          )}
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps, { getUserData })(user);
