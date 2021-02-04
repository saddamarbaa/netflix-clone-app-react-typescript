import React from "react";
import "./App.css";
import HomeScreen from "./components/HomeScreen";

// App component(parent component)

const App = () => {
  return (
    <div className="app">
      <HomeScreen />
    </div>
  );
};

export default App;
