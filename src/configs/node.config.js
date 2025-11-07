import { formattingSetup } from '../setups/formatting.setup.js';
import { jsonSetup } from '../setups/json.setup.js';
import { commentsSetup } from '../setups/comments.setup.js';
import { standardSetup } from '../setups/standard.setup.js';

/**
 * Configuration complète pour projets Node.js
 */
export const nodeConfig = [
  ...standardSetup,
  ...commentsSetup,
  ...jsonSetup,
  ...formattingSetup,
];
