import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      // Flags the standard SSR-safe pattern for syncing a browser-only API into
      // state (read once in an effect since `window` isn't available during
      // server render, then subscribe for later changes) — used correctly in
      // several places here (lib/motion.ts, accordion-section.tsx, hero.tsx).
      // The "proper" alternative is useSyncExternalStore, which is a larger,
      // unrequested rewrite for a pattern that isn't actually broken.
      'react-hooks/set-state-in-effect': 'warn',
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    // Claude Code tooling checked into this repo, not application source.
    '.claude/**',
    '.impeccable/**',
  ]),
])

export default eslintConfig
