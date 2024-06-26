import { Container, Grid } from "@mui/material";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Portfolio from "./page/Portfolio/Portfolio";
import Resume from "./page/Resume/Resume";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ProjectPage from "./page/ProjectPage/ProjectPage";

function App() {
  return (
    <Container className="top_60">
      <div className="grain"></div>
      <div className="bgImage"></div>

      <Grid container spacing={6}>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Profile />
        </Grid>
        <Grid item xs className="index">
          <Header />
          <div style={{ paddingTop: "20px", paddingBottom: "20px" }}>
            <BrowserRouter>
              <Routes>
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/" element={<Resume />} />
                <Route path="/projectPage">
                  <Route path=":id" element={<ProjectPage />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </div>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
