import { writeFile } from "node:fs/promises"
import { basename } from "node:path"
import { templateFiles } from "../../rutas/rutas.mjs"
import { copyFiles } from "./copyFiles.mjs"
export async function createFile(nombre) {
	await writeFile(nombre, "")
	const filename = basename(nombre)
	const copyPromises = templateFiles.map(async (ruta) => {
		const filenameRuta = basename(ruta)
		if (filenameRuta == filename) {
			await copyFiles(ruta, nombre)
		}
	})
	await Promise.all(copyPromises)
}
