import React from 'react';
import PropTypes from 'prop-types';
import blueGrey from '@material-ui/core/colors/blueGrey';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { DatePicker, KeyboardDatePicker } from '@material-ui/pickers';
import {
  isMobile,
  isDesktop,
} from 'theme';

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
