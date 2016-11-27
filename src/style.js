
import EStyleSheet from 'react-native-extended-stylesheet';

// Global values
EStyleSheet.build({
  dimen: {
    marginSmall: 8,
    marginMedium: 16,
    contentMargin: 16,
    touchableMin: 48,
    borderRadius: 4,
  },
  color: {
    // Application theme
    themeDark: "#54493f",
    themeModerate: "#726e68",
    themeNeutral: "#a39f94",
    themeLight: "#f7f2ed",
    themeAccent: "#cc4f2c",

    // Text color scehme
    textPrimary: "rgba(0, 0, 0, 0.87)",
    textSecondary: "rgba(0, 0, 0, 0.54)",
    textTertiary: "rgba(0, 0, 0, 0.3)",
    textQuaternary: "rgba(0, 0, 0, 0.13)",
    textPrimaryInverse: "rgba(255, 255, 255, 1)",
    textSecondaryInverse:"rgba(255, 255, 255, 0.7)",
    textTertiaryInverse:"rgba(255, 255, 255, 0.5)",
    textQuaternaryInverse: "rgba(255, 255, 255, 0.13)",

    // Util colors
    transparent: "rgba(255, 255, 255, 0.0)",
  },
  opacity: {
    pressed: 0.87,
    enabled: 0.54,
    disabled: 0.13,
  }
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
    fontSize: 96,
    fontWeight: "100"
  },
  textButton: {
    fontSize: 18,
    fontWeight: "500",
  },
});
