import * as fs from "node:fs/promises"
import path from "node:path"
const reset = "C:/Users/ezeki/Template/Reset Styles/scss/base/_reset.scss"
const fonts = "C:/Users/ezeki/Template/Reset Styles/scss/base/_fonts.scss"
const mixins = "C:/Users/ezeki/Template/Reset Styles/scss/abstract/_mixins.scss"
const variables =
	"C:/Users/ezeki/Template/Reset Styles/scss/abstract/_variables.scss"

const base = {
	build: [
		"html",
		"html/index.html",
		"css",
		"css/style.css",
		"js",
		"js/main.mjs",
		"assest",
		"assest/fonts",
		"assest/images",
		"assest/images/icons",
		"assest/images/ilustration",
	],
	src: [
		"base",
		"abstract",
		"layout",
		"components",
		"style.scss",
		"base/_reset.scss",
		"base/_fonts.scss",
		"abstract/_mixins.scss",
		"abstract/_variables.scss",
	],
}

export async function structureBase() {
	for (const [padre, hijos] of Object.entries(base)) {
		await createCarpeta(padre)
		for (const hijo of hijos) {
			const ruta = path.join(`${padre}`, `${hijo}`)
			if (hijo.includes(".")) await createFile(ruta)
			if (!hijo.includes(".")) await createCarpeta(ruta)
		}
	}
}

async function createCarpeta(nombre) {
	try {
		await fs.mkdir(`./${nombre}`, { recursive: true })
	} catch (error) {
		console.log(`Error al crear la carpeta! ${error}`)
	}
}
async function createFile(nombre) {
	try {
		await fs.writeFile(`./${nombre}`, "")
		if (nombre.includes("_reset.scss"))
			await fs.copyFile(`${reset}`, `./${nombre}`)
		else if (nombre.includes("_fonts.scss"))
			await fs.copyFile(`${fonts}`, `./${nombre}`)
		else if (nombre.includes("_mixins"))
			await fs.copyFile(`${mixins}`, `./${nombre}`)
		else if (nombre.includes("_variables"))
			await fs.copyFile(`${variables}`, `./${nombre}`)
	} catch (error) {
		console.log(`Error al crear el archivo! ${error}`)
	}
}
