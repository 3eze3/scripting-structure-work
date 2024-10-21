import { createProjectStructure } from "../utils/common.mjs"

const files = {}

function setFileName(root) {
	files[root] = [
		"backend",
		"backend/src",
		"backend/src/routes",
		"backend/src/routes/api.js",
		"backend/src/controllers",
		"backend/src/controllers/attackController.js",
		"backend/src/models",
		"backend/src/models/targetModel.js",
		"backend/src/services",
		"backend/src/services/phishingService.js",
		"backend/src/utils",
		"backend/src/utils/networkUtils.js",
		"backend/src/middlewares",
		"backend/src/middlewares/authMiddleware.js",
		"backend/app.js",
		"backend/package.json",
		"backend/.env",
		"backend/node_modules",

		"frontend",
		"frontend/public",
		"frontend/public/index.html",
		"frontend/src",
		"frontend/src/components/",
		"frontend/src/components/AttackOverview.js",
		"frontend/src/hooks/",
		"frontend/src/services/",
		"frontend/src/services/attackApiService.js",
		"frontend/src/styles/",
		"frontend/src/App.js",
		"frontend/package.json",

		"red-team-scripts/",
		"red-team-scripts/phishing/",
		"red-team-scripts/phishing/phishing.js",
		"red-team-scripts/network-scan/",
		"red-team-scripts/network-scan/nmapScan.sh",
		"red-team-scripts/exploitations/",
		"red-team-scripts/exploitations/exploitVulnerability.js",

		"security-logs/",
		"security-logs/logs.json",

		"tests/",
		"tests/backend-tests/",
		"tests/backend-tests/attackController.test.js",
		"tests/frontend-tests/",
		"tests/frontend-tests/AttackOverview.test.js",
		"tests/penetration-tests/",
		"tests/penetration-tests/testPhishing.sh",
	]
}

export async function integrador() {
	await createProjectStructure(files, setFileName)
}
