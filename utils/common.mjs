import { generalFileStrcuture } from "./structure.mjs"
import { createInterface } from "readline"

export function askFileName() {
	return new Promise((resolve) => {
		const input = createInterface({
			input: process.stdin,
			output: process.stdout,
		})
		input.question("Nombre de la capeta principal \n", (nombre) => {
			input.close()
			resolve(nombre)
		})
	})
}

export async function createProjectStructure(files, setFileName) {
	const proyectName = await askFileName()
	setFileName(proyectName)
	try {
		const promises = Array.from(generalFileStrcuture(files))
		await Promise.all(promises)
	} catch (error) {
		console.error(
			`\n[!] Error al procesar el arreglo de promesas!\n ${error}`
		)
	}
}
