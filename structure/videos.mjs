import { createProjectStructure } from "../utils/common.mjs"

const files = {}

function setFileName(root) {
	files[root] = [
		"audios",
		"videos",
		"recursos",
		"recursos/img",
		"recursos/clips",
		"recursos/clips/genericos",
		"recursos/clips/propios",
		"recursos/music",
		"recursos/texturas",
		"recursos/animaciones",
	]
}

export async function videos() {
	await createProjectStructure(files, setFileName)
}
