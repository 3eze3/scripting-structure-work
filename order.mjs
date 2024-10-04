#!/usr/bin/env node
import { argv, exit } from "node:process"
import { structureBase } from "./utils/base.mjs"
const carpetas = {
	// "./": [".gitignore", "README.md"],
	build: [
		"css",
		"html",
		"html/index.html",
		"css/style.css",
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
		"abstract/_minxins.scss",
		"abstract/_variables.scss",
	],
}

function menu() {
	const parameter = argv[2]
	if (!parameter) {
		console.log(
			"\n[+] Estructura para un projecto base [Html, Css/Scss , Js]"
		)
		structureBase()
	}
	// if (parameter.lowerCase() == "fm") {
	// 	console.log("\n[+] Estructura para proyecto Frontend Mentor\n")
	// } else if (parameter.lowerCase() == "van") {
	// 	console.log(
	// 		"\n[+] Estructura para proyecto Vanilla [Html, Css/Scss, JS/TS]\n"
	// 	)
	// } else if (parameter.lowerCase() == "react") {
	// 	console.log(
	// 		// Debo revisar como es la estructura de projectos en react
	// 		"\n[+] Estructura para proyecto de React \n"
	// 	)
	// } else if (parameter.lowerCase() == "inte") {
	// 	// Establecer bien el flujo de carpetas generales
	// 	console.log(
	// 		"\n[+] Estructura para proyecto Integrador [Hacking , Frontend ]\n"
	// 	)
	// }
}
menu()
