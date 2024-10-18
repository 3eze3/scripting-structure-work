import { join, basename } from "node:path"
import { mkdir, writeFile, copyFile } from "node:fs/promises"
import { templateFiles } from "../rutas/rutasAbsolutas.mjs"
import { existsSync } from "node:fs"

async function createDir(nombre) {
	if (existsSync(`./${nombre}`)) return
	try {
		await mkdir(`./${nombre}`, { recursive: true })
	} catch (error) {
		console.log(`Error al crear la carpeta! ${error}`)
	}
}

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
async function copyFiles(src, dst) {
	try {
		await copyFile(src, dst)
	} catch (error) {
		console.log(`Error al copiar desde ${src} hasta ${dst} : ${error}`)
	}
}

export async function makeStructure(files) {
	for (const [padre, hijos] of Object.entries(files)) {
		await createDir(padre)
		for (const hijo of hijos) {
			const ruta = join(padre, hijo)
			if (!hijo.includes(".")) await createDir(ruta)
			else await createFile(ruta)
		}
	}
}
