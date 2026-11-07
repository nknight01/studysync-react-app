
import { Link, useParams } from "react-router-dom";
import items from "../data/items";

function ItemDetails() {
  const { id } = useParams();

  const item = items.find(
    (assignment) => assignment.id === id
  );

  if (!item) {
    return (
      <main className="item-details">
        <h1>Assignment Not Found</h1>

        <p>
          The assignment you requested does not exist.
        </p>

        <p>
          Requested ID: {id}
        </p>

        <Link to="/items">
          Back to Assignments
        </Link>
      </main>
    );
  }

  return (
    <main className="item-details">
      <h1>{item.title}</h1>

      <p>Assignment ID: {item.id}</p>

      <p>Course: {item.course}</p>

      <p>Status: {item.status}</p>

      <h2>Description</h2>

      <p>{item.description}</p>

      <Link to="/items">
        Back to Assignments
      </Link>

      <p>
        <Link to="/">Back to Home</Link>
      </p>
    </main>
  );
}

export default ItemDetails;
