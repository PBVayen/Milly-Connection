// Where the page reads the bot's data (format: docs/dashboard-data.md).
// Leave dataUrl empty to show the made-up sample day from sample-data.js.
// "{stamp}" is replaced by the current UTC minute (YYYYMMDDHHmm) so a per-minute path dodges CDN caching;
// the page also tries the previous minute.
window.DESK_CONFIG = {
  dataUrl: "",
  refreshSeconds: 60,
};
