import { makeStructure } from "./structure.mjs"
import { createInterface } from "readline"

export function askFileName() {
	return new Promise((resolve) => {
		const input = createInterface({
			input: process.stdin,
			output: process.stdout,
		})
		input.question("Nombre del proyecto \n", (nombre) => {
			input.close()
			resolve(nombre)
		})
	})
}

export async function makeGeneralStructure(files, setFileName) {
	const proyectName = await askFileName()
	setFileName(proyectName)
	try {
		const promises = Array.from(makeStructure(files))
		await Promise.all(promises)
	} catch (error) {
		console.error(
			`\n[!] Error al procesar el arreglo de promesas!\n ${error}`
		)
	}
}
