import React, { Component } from "react";
import { Link } from "react-router-dom";
import MyButton from "../../util/MyButton";
//icons
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
//redux
import { connect } from "react-redux";
import { likeScream, unlikeScream } from "../../redux/actions/dataActions";

class LikeButton extends Component {
  likedScream = () => {
    if (
      this.props.user.likes &&
      this.props.user.likes.find(
        (like) => like.screamId === this.props.screamId
      )
    )
      return true;
    else return false;
  };
  render() {
    const {
      likeScream,
      unlikeScream,
      screamId,
      user: { authenticated },
    } = this.props;
    const likeButton = !authenticated ? (
      <Link to="/login">
        <MyButton tip="like">
          <FavoriteBorderIcon color="primary" />
        </MyButton>
      </Link>
    ) : this.likedScream() ? (
      <MyButton tip="Undo Like" onClick={() => unlikeScream(screamId)}>
        <FavoriteIcon color="primary" />
      </MyButton>
    ) : (
      <MyButton tip="Like" onClick={() => likeScream(screamId)}>
        <FavoriteBorderIcon color="primary" />
      </MyButton>
    );
    return likeButton;
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapActionsToProps = {
  likeScream,
  unlikeScream,
};

export default connect(mapStateToProps, mapActionsToProps)(LikeButton);
