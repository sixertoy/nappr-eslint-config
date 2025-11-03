/**
 * @nappr/eslint-config
 * Configuration ESLint partagée pour les projets Nappr
 */

// Re-export des configurations depuis configs/
export * from './configs/index.config.js';

// Re-export des configurations recommandées
export * from './recommended/index.recommended.js';

// Export de la configuration React comme export principal (pour compatibilité)
export { reactConfig } from './configs/index.config.js';
