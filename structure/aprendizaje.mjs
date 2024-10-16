import { makeStructure } from "../utils/makeStructure.mjs"
const files = {}

function getfileName() {
	const proyect = "Ejemplo"
	return proyect
}

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
	const fileName = getfileName()
	setFileName(fileName)
	try {
		const promises = Array.from(makeStructure(files))
		await Promise.all(promises)
	} catch (error) {
		console.error(
			`\n[!] Error al procesar el arreglo de promesas!\n ${error} `
		)
	}
}
