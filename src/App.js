import React, { useEffect } from "react";
import memory from "./assets/images/memory.png";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";

import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/post";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <Container maxWidth="lg">
      <AppBar
        style={{
          borderRadius: 15,
          margin: "30px 0",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
        position="static"
        color="inherit"
      >
        <Typography
          style={{
            color: "rgba(0,183,255, 1)",
          }}
          variant="h2"
          align="center"
        >
          Memory
        </Typography>
        <img
          src={memory}
          alt="memory"
          style={{ margin: "auto", height: "60px" }}
        />
      </AppBar>
      <Grow>
        <Container
          maxWidth="lg"
          style={{
            opacity: 1,
            visibility: "visible",
            transform: "none",
            marginTop: "50px",
          }}
        >
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid style={{ border: "1px solid red" }} item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
