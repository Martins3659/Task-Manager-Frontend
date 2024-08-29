import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import CoverPage from "./pages/CoverPage";
import MyTask from "./pages/MyTask";
import NewTask from "./pages/NewTask";
import EditTask from "./pages/EditTask";
import { Toaster } from "react-hot-toast";

function App() {
  //  Base URL for API requests from our backend
  const [count, setCount] = useState(0);
  const baseURL = "https://task-manager-backend-vzup.onrender.com";

  return (
    <>
      <Router>
        <Toaster position="top-right" />
        <NavBar />
        <Routes>
          <Route path="/" element={<CoverPage />}></Route>
          <Route path="/task" element={<MyTask baseURL={baseURL} />}></Route>
          <Route path="/new" element={<NewTask baseURL={baseURL} />}></Route>
          <Route
            path="/edit/:id"
            element={<EditTask baseURL={baseURL} />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

// Netlify, Vercel, Render etc are popular free cloud platforms for hosting web applications.

// Netlify is best for static sites and applications with a  focus on simplicity and serverless function.

// Vercel is optimized for frontend development, especially those using React and Next.js, with strong serverless and edge capabilities.

// Render is a versatile platform suitable for full-stack applications, offering more flexible in terms of supported frameworks, databases and backend services.

// https://task-manager-backend-vzup.onrender.com
