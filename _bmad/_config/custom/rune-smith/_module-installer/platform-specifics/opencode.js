const chalk = require('chalk');

/**
 * Configure module for OpenCode
 */
async function install(options) {
  const { logger } = options;
  try {
    logger.log(chalk.dim('  Configuring OpenCode integration...'));
    return true;
  } catch (error) {
    logger.warn(chalk.yellow(`  Warning: ${error.message}`));
    return false;
  }
}
module.exports = { install };
