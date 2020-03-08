# MATERIAL UI + STYLED COMPONENTS
#Boilerplate & Example Code
## ABOUT THIS REPO:
This repo provides a combination of functional boilerplate and nonfunctional example stubs that may be useful for developers who want the ability to customize Material UI components with the Styled Components library. Contents are arranged as follows:
* README - PART I: Abbreviated code for globally overriding material UI default styles in favor of styled components, and other use full styled-components integrations.
* README - PART II: Concatenated contents of the other files in this repo, laid out in logical order.
* THE OTHER FILES: A combination of boilerplate and code that illustrates how to set up and integrate styled components into a Material UI React project.
Supporting documentation can be found on the Material UI website <a href="https://material-ui.com/guides/interoperability/#styled-components">here</a>, <a href="https://material-ui.com/guides/interoperability/#controlling-priority-%EF%B8%8F-3">here</a> and <a href="https://material-ui.com/styles/advanced/#injectfirst">here</a>.<code>
## PLEASE NOTE:
* This by no means covers all of the different features and functionality available from the Styled Components library.
* The author had about 18 months coding experience at the time of writing, so the information below may not reflect best practices.
* The concatenation in this readme differs from the files in that there is no app.jsx, app-wrapper.jsx, or index.js files.  There are
  also some differences in the file paths of imports (i.e., the files illustrate aliasing whereas here they illustrate relative paths.)

###  PART I - Key styled-components code integrations.
```
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import PropTypes from 'prop-types';
import { defaultTheme } from './default-theme';
import { GlobalStyle } from './global-style';
import { StylesProvider } from '@material-ui/styles';
import { ThemeProvider } from 'styled-components';

const AppWrapper = ({ children }) => (
  <>
    <cssbaseline/>
    <themeprovider theme="{defaultTheme}">
      <stylesprovider injectfirst="">
        <globalstyle/>
        {children}
      </stylesprovider>
    </themeprovider>
  < / >
);

AppWrapper.defaultProps = {
  children: null,
};

AppWrapper.propTypes = {
  children: PropTypes.node,
};

export default AppWrapper;```

```
GlobalStyle and defaultTheme are defined in other files. For example:

```
// global-style.jsx
import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`...`;
export default GlobalStyle;
```
and
```
// theme.js
const defaultTheme = { ... };
export default defaultTheme;
```
### PART II - File concat illustrating project setup & organization.
#### Set up application to provide theme, global styles, and style overrides.
```
// path/to/app-wrapper.jsx
import CssBaseline from '@material-ui/core/CssBaseline';
import PropTypes from 'prop-types';
import { defaultTheme } from '../relative/path/to/theme';
import { GlobalStyle } from '../relative/path/to/global-style';
import { StylesProvider } from '@material-ui/styles';
import { ThemeProvider } from 'styled-components';

const AppWrapper = ({ children }) => (
  <>
    <CssBaseline />
    <ThemeProvider theme="{defaultTheme}">
      <StylesProvider injectfirst="">
        <GlobalStyle/>
        {children}
      </StylesProvider>
    </ThemeProvider>
  < / >
);

AppWrapper.defaultProps = {
  children: null,
};

AppWrapper.propTypes = {
  children: PropTypes.node,
};

export default AppWrapper;
```

####Create a theme file.
```
// path/to/theme.js
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

####Provide breakpoints & media-query functions
```
// path/to/media-queries.js
// This could just as easily be included in the theme.
import styled from 'styled-components';

export const size = {
  desktopLG: '66rem',
  desktopSM: '51rem',
  tabletLG: '44rem',
  tabletSM: '31rem',
  phone: '0rem',
};

export const device = {
  desktopLG: `(min-width: ${size.desktopLG})`,
  desktopSM: `(min-width: ${size.desktopSM})`,
  tabletLG: `(min-width: ${size.tabletLG})`,
  tabletSM: `(min-width: ${size.tabletSM})`,
  phone: `(min-width: ${size.phone})`,
};

// These can be useful outside of styled components (Example 2, below)
export const isDesktop = window.matchMedia(
  '(hover: hover) and (pointer: fine)',
).matches;

export const isPhone = window.matchMedia(
  '(hover: none) and (pointer: coarse) and (max-width: 31rem)',
).matches;

export const isMobile = window.matchMedia(
  '(hover: none) and (pointer: coarse)',
).matches;

export const RenderIfMobile = styled.div`
  @media (hover: hover) and (pointer: fine) {
    display: none;
  }
`;

export const RenderIfDesktop = styled.div`
  @media (hover: none) and (pointer: coarse) {
    display: none;
  }
`;
```
####Provide global styles.
```
// path/to/global-style.jsx
// This file can reference the theme
import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
  tagname {
      property: value
  }

  tagname:selector {
    property: value;
    property: value;
    property: value;
  }

  button:hover {
    property: value;
    property: value;
    property: value;
  }

  * {
    property: value;
    property: value;
    property: value;
  }

  #primary-container {
    // SIDEBARS
    display: grid;
    grid-column-gap: __;
    width: ____;
    height: ____;

    @media (min-width: ${props => props.theme.bp[4]}) {
      grid-template-areas:
        "ResponsiveleftSidePanel appBarArea rightSidePanel"
        "ResponsiveleftSidePanel cardArea rightSidePanel";
      grid-template-columns: __ __ __;
      grid-template-rows: __ __;
    }

    // NO SIDEBARS
    @media (max-width: ${props => props.theme.bp[4]}) {
      grid-template-areas:
        "appBarArea"
        "cardArea";
      grid-template-columns: __;
      grid-template-rows: __ __;
    }
  }
`;

export default GlobalStyle;
```
####EXAMPLE 1A --- Create reusable styled components based on theme.
```
// path/to/styled-dialog-parts
import styled from 'styled-components';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

const StyledMuiDialog = styled(Dialog)`
  display: flex;
  justify-content: center;
  border-radius: ${props => props.theme.dialogRadius};
`;

const StyledMuiDialogTitle = styled(DialogTitle)`
  font-size: ${props => props.theme.fontSizeDialogTitle};
  padding-top: ${props => props.theme.p(3)};
  padding-bottom: ${props => props.theme.p(3)};
  color: ${props => props.theme.fgColor1};
  background: ${props => props.theme.primary};
`;

const StyledMuiDialogContent = styled(DialogContent)`
  padding: ${props => props.theme.p(3)};
  padding-top: ${props => props.theme.p(3)};
  padding-bottom: ${props => props.theme.p(3)};
`;

const StyledMuiTextFieldContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
`;

const StyledMuiTextField = styled(TextField)`
  margin: ${props => props.theme.m(0.5)};
`;

const StyledMuiDateFieldContainer = styled(Box)`
  display: flex;
  flex: nowrap;
  padding-top: ${props => props.theme.p(3)};
  justify-content: center;
  * {
    margin: ${props => props.theme.m(0.5)};
  }
`;

const StyledMuiDialogActions = styled(DialogActions)`
  padding: ${props => props.theme.p(3)};
  padding-top: ${props => props.theme.p(2)};
  padding-bottom: ${props => props.theme.p(2)};
  background: ${props => props.theme.primary};
`;

export {
  StyledMuiDialog,
  StyledMuiDialogTitle,
  StyledMuiDialogContent,
  StyledMuiTextFieldContainer,
  StyledMuiTextField,
  StyledMuiDateFieldContainer,
  StyledMuiDialogActions,
};
```
####EXAMPLE 1B --- A component using styled-component exports
```
// path/to/form-dialog.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  DatePicker,
  FormButton,
  TimePicker,
  StyledMuiDialog,
  StyledMuiDialogTitle,
  StyledMuiDialogContent,
  StyledMuiTextFieldContainer,
  StyledMuiTextField,
  StyledMuiDateFieldContainer,
  StyledMuiDialogActions,
} from '../relative/path/to/styled-mui-dialog-parts';

const S = {};

S.DatePicker = styled(props => <DatePicker {...props} />)`
  property: value;
  property: value;
  property: value;
`;

S.TimePicker = styled(props => <TimePicker {...props} />)`
  property: value;
  property: value;
  property: value;
`;

class FormDialog extends React.Component {
  static propTypes = {...};
  this.state = {...}

  handleSomething = (event) => {/* ... */}
  handleSubmit = (event) => {/* ... */}
  handleClose = () => {/* ... */}

  render() {
    const {/* ... */} = this.props;
    const {/* ... */} = this.state;

    return (
      <>
        <StyledMuiDialog {/* ... */}>
          <StyledMuiDialogTitle {/* ... */}>
            Form Title
          </StyledMuiDialogTitle>

          <StyledMuiDialogContent>
            <StyledMuiTextFieldContainer>
              <StyledMuiTextField {/* ... */}/>
              <StyledMuiTextField {/* ... */}/>
              <StyledMuiTextField {/* ... */}/>
            </StyledMuiTextFieldContainer>
            <StyledMuiDateFieldContainer>
              <>
                <S.DatePicker {/* ... */}/>
                <S.TimePicker {/* ... */}/>
              </>
            </StyledMuiDateFieldContainer>
          </StyledMuiDialogContent>

          <StyledMuiDialogActions>
            <FormButton {/* ... */}>Cancel</FormButton>
            <FormButton {/* ... */}/>Submit</FormButton>
          </StyledMuiDialogActions>
        </StyledMuiDialog>
      </>
    );
  }
}

FormDialog.defaultProps = {...};
FormDialog.propTypes = {...};
export default FormDialog;
```
####EXAMPLE 2A --- Using media query functions for responsive design
```
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { device } from '../relative/path/to/media-queries';

const S = {};

S.ResponsiveLeftSidePanel = styled.div`
  @media ${device.phone} {
    property: value;
  }
  @media ${device.tabletSM} {
    background-color: ${({ theme }) => theme.secondary};
    box-shadow: ${({ theme }) => theme.boxShadowRight};
    color: ${({ theme }) => theme.textColor2};
    display: flex;
    grid-area: ${props => props.gridArea};
    justify-content: flex-end;
    overflow: visible;
    padding-right: ${({ theme }) => theme.m()};
    padding-top: ${({ theme }) => theme.m(2)};
  }
`;

S.Title = styled.h2`
  @media ${device.phone} {
    display: none;
  }
  @media ${device.desktopLG} {
    display: grid;
    margin-right: ${({ theme }) => theme.p(1)};
  }
`;

function ResponsiveLeftSidePanel({ children, gridArea, title }) {
  return (
    <S.ResponsiveLeftSidePanel gridArea={gridArea}>
      {title && (
        <S.Title>{title}</S.Title>
      )}
      {children}
    </S.ResponsiveLeftSidePanel>
  );
}

ResponsiveLeftSidePanel.defaultProps = {
  children: null,
  title: null,
};

ResponsiveLeftSidePanel.propTypes = {
  children: PropTypes.node,
  gridArea: PropTypes.string.isRequired,
  title: PropTypes.string,
};

S.ResponsiveLeftSidePanel.propTypes = {
  gridArea: PropTypes.string.isRequired,
};

export default ResponsiveLeftSidePanel;
```
####EXAMPLE 2B --- Use media query functions outside of styled components
```
import React from 'react';
import PropTypes from 'prop-types';
import blueGrey from '@material-ui/core/colors/blueGrey';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { DatePicker, KeyboardDatePicker } from '@material-ui/pickers';
import {
  isMobile,
  isDesktop,
} from '../relative/path/to/media-queries';

// Sometimes it makes sense not to fight material UI theming,
// such as when using a 3rd party component based on MUI.
const defaultMaterialTheme = createMuiTheme({
  palette: {
    primary: blueGrey,
  },
});

const ResponsiveDatePicker = (props) => {
  const { selectedDate, handleDateChange } = props;
  return (
    <>
      <ThemeProvider theme={defaultMaterialTheme}>
        {isMobile
          && (
            <DatePicker
              {/* props best for a mobile viewing */}
            />
          )}
        {isDesktop
          && (
            <KeyboardDatePicker
              {/* props best for desktop viewing */}
            />
          )}
      </ThemeProvider>
    </>
  );
}

ResponsiveDatePicker.defaultProps = {...};
ResponsiveDatePicker.propTypes = {...};
export default ResponsiveDatePicker;
```
