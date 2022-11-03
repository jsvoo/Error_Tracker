import "./styles.css";
import "./myStyles.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainNavigation from "./components/MainNavigation";
import IndexSidebar from "./components/IndexSidebar";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import ErrorLog from "./components/ErrorLog";
export default function App() {
  return (
    <BrowserRouter>
      <div>
        <MainNavigation />

        <Routes>
          <Route element={<IndexSidebar />} path="/" />
          <Route element={<Dashboard />} path="/dashboard" />
          <Route element={<ErrorLog />} path="/errorlog" />
        </Routes>
      </div>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}
