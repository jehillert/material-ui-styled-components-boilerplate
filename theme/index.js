// Use webpack or create-react-app to leverage the convenience of aliases.
// The files in the components folder assume webpack has an alias for
// this index file called 'theme'.
export { default as GlobalStyle } from './global-styles';
export { default as defaultTheme } from './themes';
export {
  device,
  RenderIfMobile,
  RenderIfDesktop,
  isDesktop,
  isMobile,
  isPhone,
} from './media-queries';
