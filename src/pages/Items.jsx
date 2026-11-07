
import { Link } from "react-router-dom";
import items from "../data/items";

function Items() {
  return (
    <main className="items-page">
      <h1>My Assignments</h1>

      <p>
        View your assignments and select one
        to see its details.
      </p>

      <div className="item-list">
        {items.map((item) => (
          <article key={item.id} className="item-card">
            <h2>{item.title}</h2>

            <p>Course: {item.course}</p>

            <p>Status: {item.status}</p>

            <Link to={`/items/${item.id}`}>
              View Details
            </Link>
          </article>
        ))}
      </div>

      <p>
        <Link to="/">Back to Home</Link>
      </p>
    </main>
  );
}

export default Items;
