import { Route, Routes } from "react-router";
import LoginPage from "./pages/LoginPage";
import HistoryPage from "./pages/HistoryPage";
import TrackersPage from "./pages/TrackersPage";
import RegisterPage from "./pages/RegisterPage";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <div className="app">
        <Routes>
          <Route path="/" exact element={<PrivateRoute />}>
            <Route path="/" exact element={<TrackersPage />} />
            <Route path="/history" element={<HistoryPage />} />
          </Route>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
