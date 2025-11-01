// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
// const Sentry = require("@sentry/node");
import * as Sentry from "@sentry/node"

Sentry.init({
  dsn: "https://2fd2da6d1a732d2de8a6237099ff3e10@o4510285266485248.ingest.us.sentry.io/4510285294141440",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});