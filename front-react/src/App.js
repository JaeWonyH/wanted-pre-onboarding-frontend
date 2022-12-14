import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import TodoListPage from "./pages/TodoListPage";
import GlobalStyles from "./style/GlobalStyles";
import axios from 'axios';

function App() {
  axios.defaults.baseURL = "https://pre-onboarding-selection-task.shop";
  return (
    <div>
      <GlobalStyles />
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/todo" element={<TodoListPage />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
