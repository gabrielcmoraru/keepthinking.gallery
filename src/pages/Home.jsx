import React from 'react';
import styled from 'styled-components';
import hero from 'assets/main_image.png';

const Home = () => (
  <Section role="region">
    <Main>
      <Img src={hero} alt="Gallery presentation picture" />
      <ImgChanger>
        <Dot><a href="#" /></Dot>
        <Dot><a href="#" /></Dot>
        <Dot><a href="#" /></Dot>
        <Dot><a href="#" /></Dot>
      </ImgChanger>
      <Caption>
        <CaptionTitle>
          Anselm Kiefer: Walhalla
        </CaptionTitle>
        <CaptionDate>
          Until 12 February 2017, Bermondsey
        </CaptionDate>
      </Caption>
    </Main>
  </Section>
);

export default Home;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  height: 100%;
  &:after {
    color: grey;
    content: "";
    display: block;
    height: 0.2em;
    width: 90%;
    margin: auto;
    border-bottom: solid;
  }
`;

const Main = styled.div`
  width: 100%;
  align-content: center;
`;

const Img = styled.img`
  width: 90%;
  height: auto;
`;

const ImgChanger = styled.ul`
  float: right;
  margin-right: 5%;
`;

const Dot = styled.li`
  height: 15px;
  width: 15px;
  margin: 0.2em;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
`;

const Caption = styled.div`
  display: grid;
  font-family: Tahoma, Geneva, sans-serif;
  text-align: left;
  margin: 2% 5% 6%;
`;

const CaptionTitle = styled.h2`
  font-size: 1.3em;
  font-weight: 500;
  margin: 0;
`;

const CaptionDate = styled.h2`
  font-size: 1.4em;
  font-weight: 10;
  color: gray;
  margin: 0;
`;
