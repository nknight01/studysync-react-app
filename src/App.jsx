
import { useState, useEffect } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,
  useNavigate,
} from "react-router-dom";

import Home from "./pages/Home.jsx";
import Items from "./pages/Items.jsx";
import ItemDetails from "./pages/ItemDetails.jsx";

import "./App.css";

const API_URL = "http://localhost:3000";

// Login page
function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");

    if (!email.trim() || !password) {
      setError("Please enter both email and password.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.status === 401) {
        throw new Error("Invalid email or password.");
      }

      if (!response.ok) {
        throw new Error(data.error || "Login failed.");
      }

      onLogin(data.token, data.user);
    } catch (err) {
      setError(err.message || "Unable to connect to the server.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="login-page">
      <h2>Login to StudySync</h2>
      <p>Sign in to access your student dashboard.</p>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter your password"
          />
        </div>

        {error && <p role="alert">{error}</p>}

        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </main>
  );
}

// Protected dashboard
function Dashboard({ token }) {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState("");
  const [adminMessage, setAdminMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProfile() {
      try {
        const response = await fetch(`${API_URL}/api/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();

        if (response.status === 401) {
          throw new Error("401: You are not authenticated. Please log in again.");
        }

        if (response.status === 403) {
          throw new Error("403: You are not allowed to access this information.");
        }

        if (!response.ok) {
          throw new Error(data.error || "Could not load profile.");
        }

        setProfile(data);
      } catch (err) {
        setError(err.message || "Unable to load profile.");
      } finally {
        setLoading(false);
      }
    }

    loadProfile();
  }, [token]);

  async function checkAdminAccess() {
    setAdminMessage("");

    try {
      const response = await fetch(`${API_URL}/api/admin`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (response.status === 401) {
        setAdminMessage("401 Unauthorized: Please log in again.");
        return;
      }

      if (response.status === 403) {
        setAdminMessage("403 Forbidden: You are logged in, but do not have administrator permission.");
        return;
      }

      if (!response.ok) {
        setAdminMessage(data.error || "Request failed.");
        return;
      }

      setAdminMessage(data.message);
    } catch {
      setAdminMessage("Unable to connect to the backend.");
    }
  }

  if (loading) {
    return <main><p>Loading your dashboard...</p></main>;
  }

  return (
    <main className="dashboard">
      <h2>StudySync Dashboard</h2>

      {error ? (
        <p role="alert">{error}</p>
      ) : (
        <>
          <h3>Welcome, {profile?.user?.email}!</h3>
          <p>{profile?.message}</p>
          <p>Role: {profile?.user?.role}</p>
        </>
      )}

      <button onClick={checkAdminAccess}>
        Test Admin Access
      </button>

      {adminMessage && (
        <p role="status">{adminMessage}</p>
      )}
    </main>
  );
}

// Main application
function AppContent() {
  const [token, setToken] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  function handleLogin(newToken, user) {
    setToken(newToken);
    setCurrentUser(user);
    navigate("/dashboard");
  }

  async function handleLogout() {
    try {
      await fetch(`${API_URL}/api/logout`, {
        method: "POST",
      });
    } catch (error) {
      console.error("Logout request failed:", error);
    }

    setToken(null);
    setCurrentUser(null);
    navigate("/login");
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>StudySync</h1>

        <nav>
          <Link to="/">Home</Link>
          {" | "}
          <Link to="/items">Assignments</Link>
          {" | "}

          {currentUser ? (
            <>
              <Link to="/dashboard">Dashboard</Link>
              {" | "}
              <span>Logged in: {currentUser.email}</span>
              {" | "}
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/items" element={<Items />} />

        <Route
          path="/items/:id"
          element={<ItemDetails />}
        />

        <Route
          path="/login"
          element={
            currentUser ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />

        <Route
          path="/dashboard"
          element={
            token && currentUser ? (
              <Dashboard token={token} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        <Route
          path="*"
          element={
            <main>
              <h1>Page Not Found</h1>
              <Link to="/">Return Home</Link>
            </main>
          }
        />
      </Routes>

      <footer>
        <p>StudySync — Small steps. Big progress.</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
