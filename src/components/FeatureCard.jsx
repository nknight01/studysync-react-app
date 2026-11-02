
function FeatureCard({ feature }) {
  return (
    <article className="feature-card">
      <span className="feature-icon">{feature.icon}</span>
      <h3>{feature.title}</h3>
      <p>{feature.description}</p>
    </article>
  );
}

export default FeatureCard;
