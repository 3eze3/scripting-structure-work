import { exit } from "node:process"
export function help() {
	console.log("\n[!] Parametros permitidos:\n")
	console.log("[+] -h: Help ")
	console.log("[+] -a: Aprendizaje -> (Practica de componente|concepto)")
	console.log("[+] -v: Vanilla -> (Html + Css/Scss + JS)")
	console.log("[+] -r: React ->(Estructura + TS)")
	console.log("[+] -i: Integrador -> (Hacking Etico)")
	console.log("[+] -c: Contenido -> (Estructura de videos)\n")
	exit(1)
}
