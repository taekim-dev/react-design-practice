import React from 'react';
import { Button, Card, Typography } from './design-system';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="showcase">
      <Typography variant="h1">Design System Showcase</Typography>
      
      <section className="showcase-section">
        <Typography variant="h2">Buttons</Typography>
        <div className="component-grid">
          <div className="component-group">
            <Typography variant="h3">Primary Buttons</Typography>
            <div className="button-group">
              <Button variant="primary" size="small">Small</Button>
              <Button variant="primary" size="medium">Medium</Button>
              <Button variant="primary" size="large">Large</Button>
            </div>
          </div>

          <div className="component-group">
            <Typography variant="h3">Secondary Buttons</Typography>
            <div className="button-group">
              <Button variant="secondary" size="small">Small</Button>
              <Button variant="secondary" size="medium">Medium</Button>
              <Button variant="secondary" size="large">Large</Button>
            </div>
          </div>

          <div className="component-group">
            <Typography variant="h3">Neutral Buttons</Typography>
            <div className="button-group">
              <Button variant="neutral" size="small">Small</Button>
              <Button variant="neutral" size="medium">Medium</Button>
              <Button variant="neutral" size="large">Large</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="showcase-section">
        <Typography variant="h2">Cards</Typography>
        <div className="component-grid">
          <Card variant="elevated" padding="medium">
            <Typography variant="h3">Elevated Card</Typography>
            <Typography>
              This is an elevated card with a subtle shadow effect.
              It's perfect for content that needs to stand out.
            </Typography>
          </Card>

          <Card variant="outlined" padding="medium">
            <Typography variant="h3">Outlined Card</Typography>
            <Typography>
              This is an outlined card with a border.
              It's great for content that needs a clean, minimal look.
            </Typography>
          </Card>
        </div>
      </section>

      <section className="showcase-section">
        <Typography variant="h2">Typography</Typography>
        <div className="component-group">
          <Typography variant="h1">Heading 1</Typography>
          <Typography variant="h2">Heading 2</Typography>
          <Typography>
            This is a body text example. It can be used for paragraphs and general content.
            The typography system ensures consistent text styling across the application.
          </Typography>
        </div>
      </section>
    </div>
  );
};

export default App;
