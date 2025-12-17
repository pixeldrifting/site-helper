import axios from "axios";

export async function fetchSite(url) {
  const response = await axios.get(url, {
    timeout: 10000,
    validateStatus: () => true,
    headers: {
      "User-Agent": "Site-Helper-Audit/1.0"
    }
  });

  return {
    html: response.data,
    headers: response.headers,
    status: response.status
  };
}
