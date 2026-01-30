#!/usr/bin/env node
/**
 * Server startup script that reads PORT from environment variables
 * Next.js automatically reads PORT from process.env, but this script
 * ensures proper configuration and logging.
 */

const { config: _config } = require("../src/lib/config.ts");

// Next.js will automatically use PORT from process.env
// Default to 3000 if not set
const port = process.env.PORT || 3000;
const hostname = process.env.HOSTNAME || "0.0.0.0";

console.log(`Starting server on ${hostname}:${port}`);
console.log(`Environment: ${process.env.NODE_ENV || "development"}`);

// Export for use in next.config.js if needed
module.exports = { port, hostname };
