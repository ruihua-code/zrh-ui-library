import pluginJs from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'

export default [
  { files: ['**/*.{js,mjs,cjs,ts,vue}'] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...pluginVue.configs['flat/strongly-recommended'],
  eslintConfigPrettier,
  {
    rules: {
      'vue/multi-word-component-names': 0,
      'max-lines': ['error', { max: 500, skipBlankLines: true, skipComments: true }],
      complexity: ['error', 5],
      'vue/max-attributes-per-line': [
        'error',
        {
          singleline: {
            max: 3
          },
          multiline: {
            max: 1
          }
        }
      ]
    }
  }
]
