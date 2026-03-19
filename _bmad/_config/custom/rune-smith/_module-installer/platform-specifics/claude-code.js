const chalk = require('chalk');

/**
 * Configure module for Claude Code
 */
async function install(options) {
  const { logger } = options;
  try {
    logger.log(chalk.dim('  Configuring Claude Code integration...'));
    return true;
  } catch (error) {
    logger.warn(chalk.yellow(`  Warning: ${error.message}`));
    return false;
  }
}
module.exports = { install };
