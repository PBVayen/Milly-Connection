// Where the page reads the bot's data (format: docs/dashboard-data.md). Empty dataUrl = the sample day.
// "{stamp}" = the current UTC minute (YYYYMMDDHHmm); each minute's push lands at a new path so the raw CDN's
// 5-minute cache can't serve stale data. fallbackUrl is the latest snapshot, for when no minute file is new.
window.DESK_CONFIG = {
  dataUrl: "https://raw.githubusercontent.com/PBVayen/Milly-Connection/data/m/{stamp}.json",
  fallbackUrl: "https://raw.githubusercontent.com/PBVayen/Milly-Connection/data/data.json",
  refreshSeconds: 60,
};
