import React, { useState } from "react";
import logo from "./logo.svg";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";
import { Tab, Tabs } from "react-bootstrap";
import Google from "./components/Google";
import Facebook from "./components/Facebook";
import "./App.css";

function App() {
  const [googleData, setGoogleData] = useState(null);
  const [fbData, setFbData] = useState(null);
  const [key, setKey] = useState("Google");

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
    >
      <Tab eventKey="Google" title="Google">
        <Google />
      </Tab>
      <Tab eventKey="Facebook" title="Facebook">
        <Facebook />
      </Tab>
      <Tab eventKey="Other" title="Other">
        In Progress
      </Tab>
    </Tabs>
  );
}

export default App;
