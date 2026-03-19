const chalk = require('chalk');

/**
 * Configure module for Amp Code
 */
async function install(options) {
  const { logger } = options;
  try {
    logger.log(chalk.dim('  Configuring Amp Code integration...'));
    return true;
  } catch (error) {
    logger.warn(chalk.yellow(`  Warning: ${error.message}`));
    return false;
  }
}
module.exports = { install };
