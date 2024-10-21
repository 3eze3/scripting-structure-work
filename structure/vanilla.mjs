import { createProjectStructure } from "../utils/common.mjs"

const files = {}
function setFileName(root) {
	files[root] = [
		"build",
		"build/html",
		"build/html/index.html",
		"build/css",
		"build/css/style.css",
		"build/js",
		"build/js/main.mjs",
		"build/assest",
		"build/assest/fonts",
		"build/assest/images",
		"build/assest/images/icons",
		"build/assest/images/ilustration",
		"src",
		"src/scss",
		"src/scss/abstract",
		"src/scss/layout",
		"src/scss/components",
		"src/scss/base",
		"src/scss/style.scss",
		"src/scss/base/_reset.scss",
		"src/scss/base/_fonts.scss",
		"src/scss/abstract/_mixins.scss",
		"src/scss/abstract/_variables.scss",
		"src/ts",
		"src/ts/main.ts",
		"README.md",
		"linkedin.md",
		".gitignore",
		"tsconfig.json",
	]
}

export async function vanilla() {
	await createProjectStructure(files, setFileName)
}
