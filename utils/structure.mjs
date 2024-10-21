import { join } from "node:path"
import { createDir } from "./files/createDir.mjs"
import { createFile } from "./files/createFilies.mjs"

export async function generalFileStrcuture(files) {
	for (const [padre, hijos] of Object.entries(files)) {
		await createDir(padre)
		for (const hijo of hijos) {
			const ruta = join(padre, hijo)
			if (!hijo.includes(".")) await createDir(ruta)
			else await createFile(ruta)
		}
	}
}
