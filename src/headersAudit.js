const securityHeaders = [
  "content-security-policy",
  "x-frame-options",
  "x-content-type-options",
  "referrer-policy",
  "permissions-policy",
  "strict-transport-security"
];

export function auditHeaders(headers) {
  const report = [];

  securityHeaders.forEach(header => {
    if (headers[header]) {
      report.push(`✅ ${header} is present`);
    } else {
      report.push(`❌ ${header} is missing`);
    }
  });

  return report;
}
