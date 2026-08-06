import type { Config } from 'tailwindcss';

/**
 * iOS "system" design tokens.
 *
 * The palette mirrors Apple's dark-mode system colors so the graphics read as
 * native iOS. `accent` (system blue) is the single brand colour used for
 * highlights, borders, icons and labels. To re-skin the whole studio for a
 * future series, change `accent` / `accentDeep` here and nothing else.
 */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        post: {
          // Canvas / surfaces
          ink: '#000000', // true black — app background
          canvas: '#0A0A0D', // exported graphic base (a hair above black)
          surface: '#0C0C0F', // large panels
          card: '#141418', // sub-cards (systemGray6-ish, opaque for clean export)
          elevated: '#1C1C1E', // elevated fills
          quote: '#121216', // quote / muted panels
          fill: '#2C2C2E', // strongest neutral fill

          // Brand accent (system blue)
          accent: '#0A84FF',
          accentDeep: '#0060DF',

          // Text
          white: '#F5F5F7', // primary label (near-white, iOS)
          gray: '#AEAEB2', // secondary label
          gray2: '#8E8E93', // tertiary label
          border: '#2A2A30', // hairline (~white/10 on black)
          separator: '#38383A', // iOS separator (dividers)
          black: '#000000',

          // Extended system colors (syntax + semantic accents)
          teal: '#64D2FF',
          mint: '#30D158',
          orange: '#FF9F0A',
          yellow: '#FFD60A',
          red: '#FF453A',
          pink: '#FF375F',
          purple: '#BF5AF2',
        },
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Display"',
          '"SF Pro Text"',
          'Inter',
          'system-ui',
          'sans-serif',
        ],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        display: ['60px', { lineHeight: '1.04', fontWeight: '800', letterSpacing: '-0.02em' }],
        subtitle: ['30px', { lineHeight: '1.28', fontWeight: '500', letterSpacing: '-0.01em' }],
        cardTitle: ['30px', { lineHeight: '1.2', fontWeight: '600' }],
        body: ['24px', { lineHeight: '1.4', fontWeight: '500' }],
        quote: ['34px', { lineHeight: '1.28', fontWeight: '600' }],
        footer: ['20px', { lineHeight: '1.3', fontWeight: '500' }],
        badge: ['18px', { lineHeight: '1.2', fontWeight: '600' }],
      },
      borderRadius: {
        canvas: '0px',
        card: '28px',
        sm2: '16px',
      },
      boxShadow: {
        ios: '0 1px 0 0 rgba(255,255,255,0.05) inset, 0 30px 80px -20px rgba(0,0,0,0.85)',
        'ios-glow':
          '0 0 0 1px rgba(10,132,255,0.25), 0 16px 50px -12px rgba(10,132,255,0.35)',
      },
    },
  },
  plugins: [],
} satisfies Config;
