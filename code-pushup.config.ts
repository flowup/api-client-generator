import coveragePlugin from '@code-pushup/coverage-plugin';
import eslintPlugin from '@code-pushup/eslint-plugin';
import jsPackagesPlugin from '@code-pushup/js-packages-plugin';
import type { CoreConfig } from '@code-pushup/models';

const config: CoreConfig = {
  plugins: [
    await eslintPlugin({
      eslintrc: {
        extends: [
          '@code-pushup/eslint-config/typescript',
          '@code-pushup/eslint-config/jest',
        ],
        parserOptions: {
          project: 'tsconfig.json',
        },
      },
      patterns: 'src/**/*.ts',
    }),
    await coveragePlugin({
      coverageToolCommand: { command: 'npx', args: ['jest', '--coverage'] },
      reports: ['coverage/lcov.info'],
    }),
    await jsPackagesPlugin({ packageManager: 'npm' }),
  ],

  categories: [
    {
      slug: 'bug-prevention',
      title: 'Bug prevention',
      refs: [{ type: 'group', plugin: 'eslint', slug: 'problems', weight: 1 }],
    },
    {
      slug: 'code-style',
      title: 'Code style',
      refs: [
        { type: 'group', plugin: 'eslint', slug: 'suggestions', weight: 1 },
      ],
    },
    {
      slug: 'code-coverage',
      title: 'Code coverage',
      refs: [
        { type: 'group', plugin: 'coverage', slug: 'coverage', weight: 1 },
      ],
    },
    {
      slug: 'security',
      title: 'Security',
      refs: [
        { type: 'group', plugin: 'js-packages', slug: 'npm-audit', weight: 1 },
      ],
    },
    {
      slug: 'updates',
      title: 'Updates',
      refs: [
        {
          type: 'group',
          plugin: 'js-packages',
          slug: 'npm-outdated',
          weight: 1,
        },
      ],
    },
  ],
};

export default config;
