#!/usr/bin/env node
import { argv } from "node:process"
import { help } from "./utils/help.mjs"
import { aprendizaje } from "./structure/aprendizaje.mjs"
import { vanilla } from "./structure/vanilla.mjs"
import { videos } from "./structure/videos.mjs"
import { node } from "./structure/node.mjs"
import { react } from "./structure/react.mjs"
import { integrador } from "./structure/integrador.mjs"

function menu() {
	const option = argv[2]
	if (!option) help()
	if (option === "-a") aprendizaje()
	else if (option === "-v") vanilla()
	else if (option === "-n") node()
	else if (option === "-r") react()
	else if (option === "-i") integrador()
	else if (option === "-c") videos()
	else help()
}
menu()
