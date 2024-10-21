import { exit } from "node:process"
export function help() {
	console.log("\n[!] Parametros permitidos:\n")
	console.log("[+] -h: Help ")
	console.log("[+] -a: Aprendizaje -> (Practica de componente|concepto)")
	console.log("[+] -v: Vanilla -> (Html + Css/Scss + JS)")
	console.log("[+] -r: React -> (Estructura Modular)")
	console.log("[+] -n: Node -> (Estructura + TS)")
	console.log("[+] -i: Integrador -> (enfocado a Hacking Etico)")
	console.log("[+] -c: Contenido -> (Estructura para videos)\n")
	exit(1)
}
