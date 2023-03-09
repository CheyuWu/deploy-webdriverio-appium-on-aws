
import { config } from './wdio.shared.conf';

// ============
// Specs
// ============
config.specs = [
    './tests/specs/**/app*.spec.ts',
];

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
    {
        // The defaults you need to have in your config
        appWaitActivity: '*',
        appWaitDuration: 100000,
        maxInstances: 1,
    },
];

exports.config = config;
