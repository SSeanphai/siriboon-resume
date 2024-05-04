import React from "react";
import { Container, Grid } from "@mui/material";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Portfolio from "./page/Portfolio/Portfolio";
import Resume from "./page/Resume/Resume";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12} sm={12} md={4} lg={3} style={{ background: "red" }}>
          <Profile />
        </Grid>
        <Grid item xs style={{ background: "blue" }}>
          <Header />
          <BrowserRouter>
            <Routes>
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/" element={<Resume />} />
            </Routes>
          </BrowserRouter>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
