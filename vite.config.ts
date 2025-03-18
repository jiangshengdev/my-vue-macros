import VueJsx from "@vitejs/plugin-vue-jsx";
import VueMacros from "unplugin-vue-macros/vite";
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [VueMacros({
    shortEmits: true,

    shortVmodel: {
      prefix: "$"
    },

    reactivityTransform: true,
    shortBind: true,

    defineProp: {
      edition: "kevinEdition"
    },

    defineEmit: true,
    setupComponent: true,
    setupSFC: true,
    exportExpose: true,
    exportRender: true,
    chainCall: true,
    jsxDirective: true,
    booleanProp: true,

    plugins: {
      vue: vue({
        include: [/\.vue$/, /\.setup\.[cm]?[jt]sx?$/]
      }),

      vueJsx: VueJsx()
    }
  })],
})
