import { RuleConfigSeverity } from '@commitlint/types';

import type { UserConfig } from '@commitlint/types';

const Configuration: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [
      RuleConfigSeverity.Warning,
      'always',
      [
        'backend',
        'database',
        'fixtures',
        'frontend',
        'i18n',
        'icons',
        'root',
        'state',
        'seeder',
        'test-utils',
        'theme',
        'types',
        'ui',
      ],
    ],
  },
};

export default Configuration;
