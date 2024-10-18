import { makeGeneralStructure } from "../utils/common.mjs"

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
		"src/abstract",
		"src/layout",
		"src/components",
		"src/base",
		"src/style.scss",
		"src/base/_reset.scss",
		"src/base/_fonts.scss",
		"src/abstract/_mixins.scss",
		"src/abstract/_variables.scss",
		"README.md",
		"linkedin.md",
		".gitignore",
	]
}

export async function vanilla() {
	await makeGeneralStructure(files, setFileName)
}
