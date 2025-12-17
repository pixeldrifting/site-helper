import { fetchSite } from "./src/fetchSite.js";
import { auditHeaders } from "./src/headersAudit.js";

const url = process.argv[2];

if (!url) {
  console.log("❌ Please provide a URL.");
  console.log("Usage: node index.js https://example.com");
  process.exit(1);
}

(async () => {
  console.log(`🔍 Auditing: ${url}\n`);

  try {
    const response = await fetchSite(url);
    const headersReport = auditHeaders(response.headers);

    console.log("🔐 Security Headers:");
    console.log(headersReport.join("\n"));
  } catch (error) {
    console.error("❌ Error:", error.message);
  }
})();
