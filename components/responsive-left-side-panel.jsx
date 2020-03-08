import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { device } from 'theme';

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
