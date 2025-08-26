import { defineConfig, presetMini, presetWind3, presetAttributify, presetIcons } from 'unocss'
import { transformerAttributifyJsx } from 'unocss'

export default defineConfig({
    presets: [
        presetMini(),
        presetWind3(),
        presetAttributify(),
        presetIcons(),
    ],
    transformers: [
        transformerAttributifyJsx(),
    ],
})