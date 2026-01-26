export default {
  plugins: {
    'postcss-nesting': {},
    'postcss-preset-env': {
      stage: 3,
      features: {
        'nesting-rules': true,
      },
    },
  },
}
