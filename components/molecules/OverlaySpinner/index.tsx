import React from 'react';
import styled from 'styled-components';
import Loading from '../../atoms/Loading';

const Container = styled.div`
  z-index: 10;
  height: 100vh;
  width: 100vw;
  position: absolute;
  background-color: rgba(241, 171, 144, 0.252);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InnerContainer = styled.div`
  flex-grow: 1;
`;

interface OverlaySpinnerProps {
  title?: string;
}

const OverlaySpinner = ({ title }: OverlaySpinnerProps) => (
  <Container>
    <InnerContainer>
      <Loading title={title} />
    </InnerContainer>
  </Container>
);

export default OverlaySpinner;
