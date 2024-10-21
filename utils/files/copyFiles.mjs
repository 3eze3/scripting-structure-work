import { copyFile } from "node:fs/promises"
export async function copyFiles(src, dst) {
	try {
		await copyFile(src, dst)
	} catch (error) {
		console.log(`Error al copiar desde ${src} hasta ${dst} : ${error}`)
	}
}
