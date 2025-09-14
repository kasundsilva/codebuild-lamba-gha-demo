import "./App.css";
import { useState } from "react";

function App() {
  const [buildCount] = useState(42); // Static demo value

  return (
    <div className="App">
      <header className="App-header">
        <div className="aws-badge">
          🇳🇿 AWS Community Day NZ 2025
        </div>
        <h1 className="main-title">
          AWS CodeBuild Meets GitHub Actions
        </h1>
        <p className="subtitle">
          A modern take on CI/CD efficiency
        </p>
        
        <div className="demo-stats">
          <div className="stat-item">
            <span className="stat-number">{buildCount}</span>
            <span className="stat-label">Builds</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">Success Rate</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">&lt;3min</span>
            <span className="stat-label">Build Time</span>
          </div>
        </div>

        <div className="button-group">
          <button
            className="learn-button"
            onClick={() => window.open("https://builder.aws.com/content/2te37ttc5J6VDBUC4h2R2KiA3dk/codebuild-meets-github-actions-a-serverless-ci-workflow-with-lambda", "_blank")}
          >
            📚 Learn More
          </button>
        </div>

        <div className="tech-stack">
          <span className="tech-item">☁️ AWS CodeBuild</span>
          <span className="tech-item">🔄 GitHub Actions</span>
          <span className="tech-item">🌊 AWS Lambda</span>
          <span className="tech-item">📦 Serverless</span>
        </div>
      </header>

      <footer className="app-footer">
        <p>Built with ❤️ for AWS Community Day New Zealand 2025</p>
        <p className="demo-note">🎯 Exploring modern CI/CD patterns with AWS & GitHub</p>
      </footer>
    </div>
  );
}

export default App;
