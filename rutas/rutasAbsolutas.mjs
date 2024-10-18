import { join } from "node:path"
const styles = "C:/Users/ezeki/Template/resetStyles/scss"
const publicaciones = "C:/Users/ezeki/Template/publicaciones"
const config = "C:/Users/ezeki/Template/tsconfig"

export const templateFiles = [
	join(styles, "/base/_reset.scss"),
	join(styles, "/base/_fonts.scss"),
	join(styles, "/abstract/_mixins.scss"),
	join(styles, "/abstract/_variables.scss"),
	join(publicaciones, "Projectos/README.md"),
	join(publicaciones, "Projectos/linkedin.md"),
	join(config, "individual/tsconfig.json"),
	join(config, "modulos/tsconfig.json"),
]
