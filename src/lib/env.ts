/**
 * Centralized Environment Configuration
 * 
 * This module provides type-safe access to environment variables
 * with proper defaults and validation.
 * Uses config reader utilities for type conversion.
 */

import { config } from './config';

// Re-export config for backward compatibility
export const appConfig = config.app;
export const siteConfig = config.site;
export const analyticsConfig = config.analytics;
export const apiConfig = config.api;
export const contactConfig = config.contact;
export const socialConfig = config.social;
export const featureFlags = config.features;
export const deploymentConfig = config.deployment;
export const serverConfig = config.server;

// All configs are now imported from config.ts

// Re-export helper functions from config
export { getOgImageUrl, getCanonicalUrl } from './config';
