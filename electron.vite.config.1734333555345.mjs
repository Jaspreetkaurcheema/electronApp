// electron.vite.config.ts
import { defineConfig, externalizeDepsPlugin } from "electron-vite";
import { resolve, normalize, dirname } from "path";
import injectProcessEnvPlugin from "rollup-plugin-inject-process-env";
import tsconfigPathsPlugin from "vite-tsconfig-paths";
import reactPlugin from "@vitejs/plugin-react";

// package.json
var main = "./node_modules/.dev/main/index.js";
var resources = "src/resources";

// electron.vite.config.ts
var [nodeModules, devFolder] = normalize(dirname(main)).split(/\/|\\/g);
var devPath = [nodeModules, devFolder].join("/");
var tsconfigPaths = tsconfigPathsPlugin({
  projects: [resolve("tsconfig.json")]
});
var electron_vite_config_default = defineConfig({
  main: {
    plugins: [tsconfigPaths, externalizeDepsPlugin()],
    build: {
      rollupOptions: {
        input: {
          index: resolve("src/main/index.ts")
        },
        output: {
          dir: resolve(devPath, "main")
        }
      }
    }
  },
  preload: {
    plugins: [tsconfigPaths, externalizeDepsPlugin()],
    build: {
      outDir: resolve(devPath, "preload")
    }
  },
  renderer: {
    define: {
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
      "process.platform": JSON.stringify(process.platform)
    },
    server: {
      port: 4927
    },
    plugins: [tsconfigPaths, reactPlugin()],
    publicDir: resolve(resources, "public"),
    build: {
      outDir: resolve(devPath, "renderer"),
      rollupOptions: {
        plugins: [
          injectProcessEnvPlugin({
            NODE_ENV: "production",
            platform: process.platform
          })
        ],
        input: {
          index: resolve("src/renderer/index.html")
        },
        output: {
          dir: resolve(devPath, "renderer")
        }
      }
    }
  }
});
export {
  electron_vite_config_default as default
};
