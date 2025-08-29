import { defineConfig, presetMini, presetWind3, presetAttributify, presetIcons } from 'unocss'
import { transformerAttributifyJsx } from 'unocss'

export default defineConfig({
    theme: {
        fontFamily: {
            'roboto': ['"Roboto"', 'sans-serif'],
            'orbitron': ['"Orbitron"', 'sans-serif'],
        }
    },
    presets: [
        presetMini(),
        presetWind3(),
        presetAttributify(),
        presetIcons(),
    ],
    transformers: [
        transformerAttributifyJsx(),
    ],
    safelist: [
        "bg-[url('/src/assets/cards/chess-card.avif')]",
        "bg-[url('/src/assets/cards/tierlist-card.png')]",
    ],
})