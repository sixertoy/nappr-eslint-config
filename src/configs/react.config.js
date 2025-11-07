import { typescriptSetup } from '../setups/typescript.setup.js';
import { jsxA11ySetup } from '../setups/jsx-a11y.setup.js';
import { formattingSetup } from '../setups/formatting.setup.js';
import { jsonSetup } from '../setups/json.setup.js';
import { commentsSetup } from '../setups/comments.setup.js';
import { standardSetup } from '../setups/standard.setup.js';
import { reactSetup } from '../setups/react.setup.js';

export const reactConfig = [
  ...standardSetup,
  ...typescriptSetup,
  ...reactSetup,
  ...jsxA11ySetup,
  ...commentsSetup,
  ...jsonSetup,
  ...formattingSetup,
];
