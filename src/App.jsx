
import { studyFeatures } from './studyFeatures.js';
import './App.css';

function App() {
  return (
    <main className="page">
      <header className="hero">
        <p className="eyebrow">YOUR SUCCESS STARTS HERE</p>
        <h1>StudySync</h1>
        <p className="subtitle">
          Your college life, organized in one place.
          Plan assignments, track goals, and build better
          study habits.
        </p>
      </header>

      <section className="features">
        <h2>Tools for Better Study Habits</h2>

        <div className="feature-grid">
          {studyFeatures.map((feature) => (
            <article className="feature-card" key={feature.id}>
              <span className="feature-icon">{feature.icon}</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>StudySync — Small steps. Big progress.</p>
      </footer>
    </main>
  );
}

export default App;
