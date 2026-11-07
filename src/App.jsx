
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import Home from "./pages/Home.jsx";
import Items from "./pages/Items.jsx";
import ItemDetails from "./pages/ItemDetails.jsx";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <header className="app-header">
          <h1>StudySync</h1>

            <nav>
    <Link to="/">Home</Link>
    {" | "}
    <Link to="/items">Assignments</Link>
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
            path="*"
            element={
              <main>
                <h1>Page Not Found</h1>
                <a href="/">Return Home</a>
              </main>
            }
          />
        </Routes>

        <footer>
          <p>StudySync — Small steps. Big progress.</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
