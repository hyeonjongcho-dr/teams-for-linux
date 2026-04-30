const MAC_TEAMS_HTTP_UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Teams/26059.604.4471.2584 Safari/537.36 Edg/145.0.3800.82";

const MAC_TEAMS_JS_UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.7049.52 Safari/537.36 Edg/145.0.3800.82";

const MAC_TEAMS_URL = "https://teams.cloud.microsoft";

const MAC_TEAMS_VERSION = "26059.604.4471.2584";
const MAC_EDGE_VERSION = "145.0.3800.82";
const MAC_CHROMIUM_VERSION = "145.0.7049.52";

const SEC_CH_UA = '"Microsoft Edge";v="145", "Not/A)Brand";v="8", "Chromium";v="145"';
const SEC_CH_UA_FULL_VERSION_LIST =
  '"Microsoft Edge";v="145.0.3800.82", "Not/A)Brand";v="8.0.0.0", "Chromium";v="145.0.7049.52"';
const SEC_CH_UA_PLATFORM = '"macOS"';
const SEC_CH_UA_MOBILE = "?0";
const SEC_CH_UA_PLATFORM_VERSION = '"10.15.7"';
const SEC_CH_UA_ARCH = '"x86"';
const SEC_CH_UA_BITNESS = '"64"';
const SEC_CH_UA_MODEL = '""';

const USER_AGENT_DATA_BRANDS = [
  { brand: "Microsoft Edge", version: "145" },
  { brand: "Not/A)Brand", version: "8" },
  { brand: "Chromium", version: "145" },
];

module.exports = {
  MAC_TEAMS_HTTP_UA,
  MAC_TEAMS_JS_UA,
  MAC_TEAMS_URL,
  MAC_TEAMS_VERSION,
  MAC_EDGE_VERSION,
  MAC_CHROMIUM_VERSION,
  SEC_CH_UA,
  SEC_CH_UA_FULL_VERSION_LIST,
  SEC_CH_UA_PLATFORM,
  SEC_CH_UA_MOBILE,
  SEC_CH_UA_PLATFORM_VERSION,
  SEC_CH_UA_ARCH,
  SEC_CH_UA_BITNESS,
  SEC_CH_UA_MODEL,
  USER_AGENT_DATA_BRANDS,
};
