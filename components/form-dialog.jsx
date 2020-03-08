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
} from 'components';

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
