import type { Config } from 'jest';

const config: Config = {
  moduleDirectories: ['node_modules'],
  modulePathIgnorePatterns: [
    'node_modules',
    'packages/api',
    'packages/i18n',
    'packages/shared/__tests__/mocks',
  ],
  bail: false,
};

export default config;
