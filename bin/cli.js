#!/usr/bin/env node

/**
 * @nappr/eslint-config CLI
 * Displays help for using the ESLint configuration
 */

// ANSI color codes
const colors = {
  blue: '\x1b[34m',
  bold: '\x1b[1m',
  cyan: '\x1b[36m',
  green: '\x1b[32m',
  magenta: '\x1b[35m',
  reset: '\x1b[0m',
  yellow: '\x1b[33m',
};

const section = (title, content) => {
  return `${colors.cyan}${colors.bold}${title}${colors.reset}\n${content}\n`;
};

const help = `
${colors.bold}@nappr/eslint-config${colors.reset} - Shared ESLint configuration for Nappr projects

${colors.yellow}${colors.bold}USAGE:${colors.reset}
  yarn @nappr/eslint-config [--help]

${section(
  'AVAILABLE CONFIGURATIONS:',
  `  ${colors.green}•${colors.reset} reactConfig    - Complete configuration for React projects
  ${colors.green}•${colors.reset} nodeConfig     - Complete configuration for Node.js projects`,
)}

${section(
  'EXAMPLE:',
  `  ${colors.blue}import${colors.reset} { reactConfig } ${colors.blue}from${colors.reset} '@nappr/eslint-config';
  ${colors.blue}export default${colors.reset} [...reactConfig];`,
)}

${section('DOCUMENTATION:', `  See README.md for more details`)}

`;

const args = process.argv.slice(2);

if (args.includes('--help') || args.includes('-h')) {
  console.log(help.trim());
  process.exit(0);
}

// Par défaut, afficher l'aide
console.log(help.trim());
process.exit(0);
