#!/usr/bin/env node
import { argv } from "node:process"
import { help } from "./utils/help.mjs"
import { aprendizaje } from "./structure/aprendizaje.mjs"
import { vanilla } from "./structure/vanilla.mjs"

function menu() {
	const option = argv[2]
	if (!option) help()
	if (option === "-a") aprendizaje()
	else if (option === "-v") vanilla()
	else if (option === "-r") console.log("React, en construction...")
	else if (option === "-i") console.log("Integrador en construction..")
	else if (option === "-c") console.log("Contenido en construction...")
	else help()
}
menu()
