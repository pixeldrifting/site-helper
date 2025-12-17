import { fetchSite } from "./src/fetchSite.js";
import { auditHeaders } from "./src/headersAudit.js";
import { generateReport } from "./src/report.js";

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

    const reportPath = generateReport({
      url,
      status: response.status,
      headersReport
    });

    console.log("✅ Audit completed successfully!");
    console.log(`📄 Report generated at: ${reportPath}`);
  } catch (error) {
    console.error("❌ Error:", error.message);
  }
})();
