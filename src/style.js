
import EStyleSheet from 'react-native-extended-stylesheet';

// Global values
EStyleSheet.build({
  dimen: {
  },
  color: {
    // Application theme
    accent: "rgb(139, 20, 38)",
    accentDark: "rgb(98, 13, 31)",

    // Text color scehme
    textPrimary: "rgba(0, 0, 0, 0.87)",
    textSecondary: "rgba(0, 0, 0, 0.54)",
    textTertiary: "rgba(0, 0, 0, 0.3)",
    textPrimaryInverse: "rgba(255, 255, 255, 1)",
    textSecondaryInverse:"rgba(255, 255, 255, 0.7)",
    textTertiaryInverse:"rgba(255, 255, 255, 0.5)",

    // Util colors
    transparent: "rgba(255, 255, 255, 0.0)",
  },
});

// Global styles
export default global = EStyleSheet.create({
  textBody: {
    fontSize: 12,
    fontWeight: 'normal',
  },
  textSubHeading: {
    fontSize: 16,
    fontWeight: 'normal'
  },
  textTitle: {
    fontSize: 20,
    fontWeight: "500",
  },
  textHeadline: {
    fontSize: 24,
    fontWeight: 'normal',
  },
  textDisplay1: {
    fontSize: 34,
    fontWeight: 'normal',
  },
  textDisplay2: {
    fontSize: 45,
    fontWeight: 'normal',
  },
  textDisplay3: {
    fontSize: 56,
    fontWeight: 'normal',
  },
  textDisplay4: {
    fontSize: 112,
    fontWeight: "100"
  },
});
