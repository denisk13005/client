import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import moment from "moment";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import DeleteIcon from "@mui/icons-material/Delete";

const Post = ({ post }) => {
  return (
    <div
      style={{
        width: "45%",
        height: "auto",
        border: "1px solid red",
        marginBottom: "50px",
      }}
    >
      <div
        style={{
          height: "100%",
          position: "relative",
          height: "400px",
        }}
      >
        <CardMedia
          style={{ width: "100%", height: "50%" }}
          image={post.selectedFile}
        />
        <div style={{ position: "absolute", top: "0" }}>
          <Typography variant="h6">{post.creator}</Typography>
          <Typography variant="body2">
            {moment(post.createdAt).fromNow()}{" "}
            {/*défini le moment où on a poster*/}
          </Typography>
        </div>
        <Typography variant="body2" color="textSecondary" component="h2">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.message}
        </Typography>
        <Button size="small" color="primary">
          <ThumbUpIcon fontSize="small" /> Like {post.likeCount}{" "}
        </Button>
        <Button size="small" color="primary">
          <DeleteIcon fontSize="small" /> Delete
        </Button>
      </div>
    </div>
  );
};

export default Post;
