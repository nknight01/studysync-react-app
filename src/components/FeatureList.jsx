
import FeatureCard from './FeatureCard';

function FeatureList({ features }) {
  return (
    <section className="features">
      <h2>Tools for Better Study Habits</h2>

      <div className="feature-grid">
        {features.map((feature) => (
          <FeatureCard
            key={feature.id}
            feature={feature}
          />
        ))}
      </div>
    </section>
  );
}

export default FeatureList;
