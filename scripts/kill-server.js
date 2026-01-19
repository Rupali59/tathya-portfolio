#!/usr/bin/env node
/**
 * Kill Server Script
 * 
 * Kills all Next.js processes and processes running on the configured PORT.
 * Reads PORT from environment variables (same as config reader).
 */

const { execSync } = require('child_process');

// Read PORT from environment (same logic as config reader)
const port = parseInt(process.env.PORT || '3000', 10);

console.log(`Killing processes on port ${port}...`);

try {
  // Kill Next.js dev processes
  execSync("pkill -f 'next dev' || true", { stdio: 'inherit' });
  
  // Kill Next.js start processes
  execSync("pkill -f 'next start' || true", { stdio: 'inherit' });
  
  // Kill npm run dev processes
  execSync("pkill -f 'npm run dev' || true", { stdio: 'inherit' });
  
  // Kill processes on the configured port
  try {
    const pids = execSync(`lsof -ti:${port}`, { encoding: 'utf-8' }).trim();
    if (pids) {
      execSync(`kill -9 ${pids}`, { stdio: 'inherit' });
      console.log(`Killed processes on port ${port}`);
    }
  } catch (error) {
    // No processes found on port, that's okay
  }
  
  console.log('✅ All processes killed');
} catch (error) {
  // Ignore errors - processes might not be running
  console.log('✅ Cleanup complete');
}
