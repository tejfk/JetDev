const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'src', 'components', 'About.jsx');
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  'Expertise in AI-assisted development and rapid prototyping. I iterate on complex systems with speed and precision, using state-of-the-art tools.',
  "I don't just code \u2014 I leverage AI tools to build smarter and ship faster. From intelligent prototyping to AI-assisted debugging, my workflow is built for speed without sacrificing quality."
);

content = content.replace(
  'Committed to staying at the forefront of the industry, delivering products that help businesses succeed through cutting-edge technology.',
  'I believe the best developers never stop learning. Every project is a chance to push boundaries, explore new patterns, and deliver something that truly matters to the people who use it.'
);

fs.writeFileSync(file, content, 'utf8');
console.log('Done');
