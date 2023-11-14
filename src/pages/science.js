// src/components/Science.js
import React from 'react';

const Science = () => {
  return (
    <div>
      <h2>Science</h2>
      <p>
        Science is the pursuit of knowledge about the natural world. Dive into the wonders of biology, chemistry, physics, and more.
      </p>
      <h3>Disciplines:</h3>
      <ul>
        <li>Biology</li>
        <li>Chemistry</li>
        <li>Physics</li>
        <li>Astronomy</li>
        {/* Add more disciplines as needed */}
      </ul>
      <h3>Experiments:</h3>
      <p>Try these simple science experiments to explore fundamental concepts:</p>
      <ol>
        <li>Make a volcano with baking soda and vinegar.</li>
        <li>Explore density with a floating and sinking experiment.</li>
        {/* Add more experiments as needed */}
      </ol>
      <h3>Resources:</h3>
      <ul>
        <li>
          <a href="https://www.nasa.gov/" target="_blank" rel="noopener noreferrer">
            NASA - National Aeronautics and Space Administration
          </a>
        </li>
        <li>
          <a href="https://www.khanacademy.org/" target="_blank" rel="noopener noreferrer">
            Khan Academy - Science
          </a>
        </li>
        {/* Add more resources as needed */}
      </ul>
    </div>
  );
};

export default Science;
