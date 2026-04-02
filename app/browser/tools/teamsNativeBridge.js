class TeamsNativeBridge {
  #listeners = new Map();

  init() {
    console.debug("[TeamsNativeBridge] Initializing native bridge mocks");

    globalThis.chrome = globalThis.chrome || {};
    globalThis.chrome.webview = {
      postMessage: (_msg) => {},
      addEventListener: (type, cb) => {
        if (!this.#listeners.has(type)) {
          this.#listeners.set(type, new Set());
        }
        this.#listeners.get(type).add(cb);
      },
      removeEventListener: (type, cb) => {
        this.#listeners.get(type)?.delete(cb);
      },
    };

    globalThis.hostObjects = {
      sync: {
        piehostbridge: {
          invokeSync(jsonMsg) {
            const msg = JSON.parse(jsonMsg);
            return JSON.stringify({
              messageId: msg.messageId || 0,
              messageName: msg.messageName || "",
              isToHost: false,
              response: {},
              errorMessage: null,
            });
          },
          getStartingSyncId() {
            return 1;
          },
        },
      },
    };

    globalThis.pieSharedBridgeFactory = function (_version, _minVersion) {
      return {
        initialize() {},
        invokeHostSync(_name, _args) {
          return "{}";
        },
        sendMessageToHost(_msg) {},
        registerHandler(_name, _handler) {},
        RaiseEvent(_name, _data) {},
        processBatchToHost(_batch) {},
        invokeHostAsync(_name, _args) {
          return Promise.resolve("{}");
        },
        supportedVersion: 3,
        isBrowser: false,
        hostClientType: "desktop",
        platformType: "Electron",
      };
    };
  }
}

module.exports = new TeamsNativeBridge();
