
import { useState } from 'react';
import { studyFeatures } from './studyFeatures.js';
import Header from './components/SiteHeader.jsx';
import FeatureList from './components/FeatureList';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFeatures = studyFeatures.filter((feature) =>
    feature.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    feature.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const resultCount = filteredFeatures.length;

  return (
    <main className="page">
      <Header />

      <div className="search-section">
        <h2>Find Your Study Tools</h2>
        <SearchBar
          searchTerm={searchTerm}
          onSearch={setSearchTerm}
        />
        <p className="result-count">
          Showing {resultCount} of {studyFeatures.length} study tools
        </p>
      </div>

      {filteredFeatures.length > 0 ? (
        <FeatureList features={filteredFeatures} />
      ) : (
        <p className="no-results">
          No study tools found. Try another search.
        </p>
      )}

      <Footer />
    </main>
  );
}

export default App;
