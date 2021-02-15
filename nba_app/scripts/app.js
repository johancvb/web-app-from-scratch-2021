import "./router.js";
import { renderTeamsOverview } from './overview/overview.js';

// const container = document.querySelector('.app .container');

(async function app() {
	await renderTeamsOverview();
})();

