import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import React from 'react';
import Login from "./pages/Login";
import OAuthRedirectPage from "./pages/OAuthRedirectPage";
function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route
                path="/"
                element={<Login/>}
            />
              <Route
                  path="/kakao/callback"
                  element={<OAuthRedirectPage/>}
              />
            </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
