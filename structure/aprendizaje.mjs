import { makeGeneralStructure } from "../utils/common.mjs"

const files = {}

function setFileName(root) {
	files[root] = [
		"img",
		"html",
		"html/index.html",
		"css",
		"css/style.css",
		"js",
		"js/main.js",
		"README.md",
	]
}

export async function aprendizaje() {
	await makeGeneralStructure(files, setFileName)
}
