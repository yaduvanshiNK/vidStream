import React from "react";
import { CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import {
  Actors,
  MovieInformation,
  Movies,
  Navbar,
  Profile,
} from "./componentRef";
const App = () => {
  return (
    <div>
      <CssBaseline />
      <Navbar />
      <main>
        <Routes>
          <Route exact path="/" element={"Home"} />
          <Route exact path="/movies" element={<Movies />} />
          <Route exact path="/movie" element={<MovieInformation />} />
          <Route exact path="/actors" element={<Actors />} />
          <Route exact path="/Profile" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
