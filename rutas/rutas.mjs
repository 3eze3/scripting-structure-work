import { join } from "node:path"
const styles = "./Templates/resetStyles/scss"
const publicaciones = "./Templates/publicaciones"
const config = "./Templates/tsconfig"

export const templateFiles = [
	join(styles, "base", "_reset.scss"),
	join(styles, "base", "_fonts.scss"),
	join(styles, "abstract", "_mixins.scss"),
	join(styles, "abstract", "_variables.scss"),
	join(publicaciones, "README.md"),
	join(publicaciones, "linkedin.md"),
	join(config, "individual", "tsconfig.json"),
]
