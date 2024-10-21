import { createProjectStructure } from "../utils/common.mjs"

const files = {}

function setFileName(root) {
	files[root] = [
		"app.js",
		".env",
		"src",
		"src/routes",
		"src/routes/users.js",
		"src/controller",
		"src/controller/userController.js",
		"src/models",
		"src/models/userModel.js",
		"src/services",
		"src/services/userServices.js",
		"src/utils",
		"src/utils/validateInput.js",
		"src/middlewares",
		"src/middlewares/authMiddleware.js",
		"src/tests",
		"src/tests/user.test.js",
	]
}

export async function node() {
	await createProjectStructure(files, setFileName)
}
