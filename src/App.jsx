import React, { useState, useEffect } from "react";
import axios from "axios";
// Global styles
import GlobalStyle from "./GlobalStyle";
// Components
import Nav from "./components/Nav";
// React-router
import { Routes, Route } from "react-router-dom";
// Pages
import Home from "./components/Home";
import Detail from "./components/Detail";
import Agents from "./components/Agents";
import Maps from "./components/Maps";

function App() {
  const [data, setData] = useState(null);
  const apiAgentsRequest = async () => {
    try {
      const { data } = await axios.get("https://valorant-api.com/v1/agents");
      setData(data.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    apiAgentsRequest();
  }, []);
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" element={<Home key="Home" />} />
        <Route path="/agents" element={<Agents data={data} />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/agents/:id" element={<Detail data={data} />} />
        <Route path="/agents/KAY/O" element={<Detail data={data} />} />
      </Routes>
    </>
  );
}

export default App;
