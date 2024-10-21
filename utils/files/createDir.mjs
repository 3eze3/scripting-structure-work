import { existsSync } from "node:fs"
import { mkdir } from "node:fs/promises"
export async function createDir(nombre) {
	if (existsSync(`./${nombre}`)) return
	try {
		await mkdir(`./${nombre}`, { recursive: true })
	} catch (error) {
		console.log(`Error al crear la carpeta! ${error}`)
	}
}
