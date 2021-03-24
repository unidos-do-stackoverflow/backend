module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
	rules: {
		'@typescript-eslint/no-unused-vars': [
			'error',
			{
				argsIgnorePattern: '_',
			},
		],

		'@typescript-eslint/naming-convention': [
			'error',
			{
				selector: 'interface',
				format: ['PascalCase'],
				custom: {
					regex: '^I[A-Z]',
					match: true,
				},
			},
		],
	},
	env: {
		es6: true,
		node: true,
		jest: true,
	},
};
