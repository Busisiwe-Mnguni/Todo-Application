
// Uses Next.js's own jest helper so tests get the same SWC compilation
// (JSX, import/export syntax) as the app itself, without needing to add
// Babel or extra config by hand.
const nextJest = require('next/jest');
 
const createJestConfig = nextJest({ dir: './' });
 
const customJestConfig = {
  testEnvironment: 'node',
};
 
module.exports = createJestConfig(customJestConfig);
 