import "./router.js";
import { renderTeamsOverview } from './overview/overview.js';

// STARTING APP

(async function app() {
	await renderTeamsOverview();
})();

