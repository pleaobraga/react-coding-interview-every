import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Button, Row, Col, Typography } from 'antd';

const Container = styled.div`
  background-color: #ffffff;
  /* font-family: 'Arvo', serif; */
  width: 100vw;
  height: 100vh;
  display: flex !important;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
`;

const Image = styled.img`
  display: block;
  max-height: 400px;
  flex-grow: 1;
  width: auto;
  height: auto;
`;

const Title = styled.p`
  font-size: 80px !important;
  padding: 0;
  margin: 0;
`;

const Subtitle = styled(Typography.Text)`
  height: 100% !important;
  font-size: 20px;
  display: block;
  margin-bottom: 20px;
`;

const NotFoundPage = () => (
  <Container>
    <Row>
      <Title>Looks like you're lost</Title>
    </Row>
    <Row>
      <Image
        src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
        alt="Caveman sucking cable"
      />
    </Row>
    <Row>
      <Subtitle type="warning" strong>
        the page you are looking for is not avaible!
      </Subtitle>
    </Row>
    <Row>
      <Link href="/">
        <Button size="large" type="primary">
          Go to Home
        </Button>
      </Link>
    </Row>
  </Container>
);

export default NotFoundPage;
