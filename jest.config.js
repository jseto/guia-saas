const pathsToIgnore = [
	'/node_modules/',
	'/dist/',
	'/out/'
]

module.exports = {
	globals: {
		'ts-jest': {
			'tsConfig': 'tsconfig.json'
		}
	},
	transform: {
		'^.+\\.(ts|tsx)$': 'ts-jest'
	},
	testMatch: [
		'**/test/**/*.spec.+(ts|tsx|js|jsx)'	
	],
	watchPathIgnorePatterns: pathsToIgnore,
	testPathIgnorePatterns: pathsToIgnore
}