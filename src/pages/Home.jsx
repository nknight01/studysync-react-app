
import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      <section className="home-page">
        <p>YOUR SUCCESS STARTS HERE</p>

        <h1>StudySync</h1>

        <p>
          Your college life, organized in one place.
          Plan assignments, track goals, and build
          better study habits.
        </p>

        <h2>Tools for Better Study Habits</h2>

        <p>
          Stay organized and keep track of your
          academic progress.
        </p>

        <Link to="/items">
          View Assignments
        </Link>
      </section>
    </main>
  );
}

export default Home;
