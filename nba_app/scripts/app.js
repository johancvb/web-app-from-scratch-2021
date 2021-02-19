import "./router.js";
import { renderTeamsOverview } from './overview/overview.js';


(async function app() {
	await renderTeamsOverview();
})();

