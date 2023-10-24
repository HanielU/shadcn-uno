import extractorSvelte from "@unocss/extractor-svelte";
import {
  defineConfig,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
  presetWebFonts,
} from "unocss";
import { myPreset, shadcnPreset } from "./presets";

// https://unocss.dev
export default defineConfig({
  extractors: [extractorSvelte()],
  configDeps: ["./presets/my-preset.ts", "./presets/shadcn-preset.ts"],
  content: {
    filesystem: ["./node_modules/bits-ui/dist/**/*.{html,js,svelte,ts}"],
    pipeline: {
      include: [/\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html|ts)($|\?)/],
    },
  },
  theme: {},
  rules: [],
  shortcuts: [],
  variants: [],

  preflights: [
    {
      getCSS: () => `
      body {
        overflow-x: hidden;
      }
      `,
    },
  ],

  presets: [
    myPreset,
    shadcnPreset,
    presetUno(),
    presetIcons({ scale: 1.2 }),
    presetWebFonts({
      fonts: {
        inter: "Inter:400;500;600;700;800",
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
