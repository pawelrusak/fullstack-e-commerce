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
        'store',
        'seeder',
        'test-utils',
        'theme',
        'types',
        'ui',
        'utils',
        'validations',
      ],
    ],
  },
};

export default Configuration;
