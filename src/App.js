import "./App.css";
import Text from "./Components/Text";
import React from "react";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import styles from "./Components/app.module.css";

function App() {
  return (
    <div className="App">
      <div className={styles.support}>
        <HeadsetMicIcon />
      </div>
      <Text />
    </div>
  );
}

export default App;
