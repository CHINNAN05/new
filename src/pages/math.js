// src/components/Math.js
import React from 'react';

const Math = () => {
  return (
    <div>
      <h2>Mathematics</h2>
      <p>
        Mathematics is the language of the universe. Explore the beauty of numbers, equations, and problem-solving.
      </p>
      <h3>Topics:</h3>
      <ul>
        <li>Arithmetic</li>
        <li>Algebra</li>
        <li>Geometry</li>
        <li>Calculus</li>
        {/* Add more topics as needed */}
      </ul>
      <h3>Resources:</h3>
      <ul>
        <li>
          <a href="https://www.khanacademy.org/" target="_blank" rel="noopener noreferrer">
            Khan Academy
          </a>
        </li>
        <li>
          <a href="https://www.wolframalpha.com/" target="_blank" rel="noopener noreferrer">
            Wolfram Alpha
          </a>
        </li>
        {/* Add more resources as needed */}
      </ul>
    </div>
  );
};

export default Math;
