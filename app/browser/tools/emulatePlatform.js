const { USER_AGENT_DATA_BRANDS, MAC_TEAMS_JS_UA } = require("../../config/macTeamsConstants");

class PlatformEmulator {
  init(config) {
    if (config.emulateMacNativeClient) {
      const macIntelStr = "MacIntel";
      const macOsStr = "macOS";
      Object.defineProperty(Navigator.prototype, "platform", {
        get: () => {
          return macIntelStr;
        },
      });

      const customUserAgentData = {
        brands: USER_AGENT_DATA_BRANDS,
        platform: macOsStr,
        mobile: false,
        getHighEntropyValues: async () => ({
          architecture: "x86",
          bitness: "64",
          platform: macOsStr,
          platformVersion: "10.15.7",
          fullVersionList: [
            { brand: "Microsoft Edge", version: "145.0.3800.82" },
            { brand: "Not/A)Brand", version: "8.0.0.0" },
            { brand: "Chromium", version: "145.0.7049.52" },
          ],
        }),
      };
      Object.defineProperty(Navigator.prototype, "userAgentData", {
        get: () => {
          return customUserAgentData;
        },
      });
      Object.defineProperty(Navigator.prototype, "userAgent", {
        get: () => MAC_TEAMS_JS_UA,
      });
      return;
    }

    //proceed without emulating windows platform in browser
    if (!config.emulateWinChromiumPlatform) {
      return;
    }

    // update property platform property in navigator.navigator
    const win32Str = "Win32";
    const windowsStr = "Windows";
    Object.defineProperty(Navigator.prototype, "platform", {
      get: () => {
        return win32Str;
      },
    });

    //update userAgentData object
    let originalUserAgentData = navigator.userAgentData;
    let customUserAgentData = structuredClone(originalUserAgentData);
    customUserAgentData = {
      ...customUserAgentData,
      platform: windowsStr,
      getHighEntropyValues: async function (input) {
        let highEntropyValue =
          await originalUserAgentData.getHighEntropyValues(input);
        if (highEntropyValue["platform"]) {
          highEntropyValue["platform"] = windowsStr;
        }
        return highEntropyValue;
      },
    };
    Object.defineProperty(Navigator.prototype, "userAgentData", {
      get: () => {
        return customUserAgentData;
      },
    });
  }
}

module.exports = new PlatformEmulator();
