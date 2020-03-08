const m = (factor = 1) => {
  const margin = 0.5 * factor;
  return `${margin}rem`;
};

const p = (factor = 1) => {
  const padding = 0.5 * factor;
  return `${padding}rem`;
};

const defaultTheme = {
  /* SPACING */
  gap,
  m,
  p,
  /* COLORS */
  primary: '#123456',
  secondary:'#123456',
  bgColor1: '#123456',
  bgColor2: '#123456',
  bgColor3: '#123456',
  fgColor1: '#123456',
  fgColor2: '#123456',
  fgColor3: '#123456',
  textColor1: '#123456',
  textColor2: '#123456',
  borderColor1: '#123456',
  borderColor2: '#123456',
  borderColor3: '#123456',
  hoverColor: '#123456',
  hoverFontColor: '#123456',
  backgroundHoverColor: '#123456',
  backgroundBorderHoverColor: '#123456',
  /* FONT SIZE */
  fontSizeDialogTitle: '__rem',
  /* RADIUS */
  backgroundBorderRadius: '__rem',
  tabBorderRadius: '__rem',
  dialogRadius: '__rem',
  /* SHADOW */
  boxShadow: '__px __px __px __px rgba(__, __, __, __.__)',
  boxShadowTop: '__px __px __px __px rgba(__, __, __, __.__)',
  boxShadowLeft: '__px __px __px __px rgba(__, __, __, __.__)',
  boxShadowRight: '__px __px __px __px rgba(__, __, __, __.__)',
  insetBoxShadowBottom: 'inset 0 -5px 5px -5px grey',
};

export default defaultTheme;
