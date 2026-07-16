import next from 'eslint-config-next'

// ESLint 9 flat config. eslint-config-next 16 ships a flat config array; spread it directly.
const config = [
  {
    ignores: ['.next/**', 'node_modules/**', 'out/**', 'dist/**', 'next-env.d.ts', 'public/**'],
  },
  ...next,
  {
    // Compatibility override for existing animation/motion components that read external state on mount.
    // New files remain subject to the default rule.
    files: [
      'components/AgentNetworkCanvas.tsx',
      'components/AnimatedComponents.tsx',
      'components/ProductSuite.tsx',
      'components/StandardInvariants.tsx',
      'components/ThemeToggle.tsx',
      'components/ThreeInvariants.tsx',
      'components/home/HeroV2.tsx',
      'components/home/motion/CountUp.tsx',
      'components/home/motion/useInView.ts',
      'components/home/motion/useReducedMotion.ts',
    ],
    rules: {
      'react-hooks/set-state-in-effect': 'off',
    },
  },
  {
    // Compatibility override for existing animation components. New files remain subject to the default rule.
    files: ['components/AnimatedComponents.tsx', 'components/JsonLd.tsx'],
    rules: {
      'react-hooks/purity': 'off',
    },
  },
]

export default config
