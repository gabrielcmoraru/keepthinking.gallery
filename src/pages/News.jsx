import React from 'react';
import styled from 'styled-components';
import eventOne from 'assets/event1.png';
import eventTwo from 'assets/event2.png';
import eventThree from 'assets/event3.png';

const News = () => (
  <Section role="region">
    <NewsHeader>
      <NewsTitle>News & Events</NewsTitle>
      <NewsSelection type="button">View all</NewsSelection>
    </NewsHeader>
    <NewsCards>
      <Card>
        <Img src={eventOne} alt="Event 1" />
        <CardTitle>
          <a href="/">
          Exhibition: He Xiangyu monograph released by Distanz
          </a>
        </CardTitle>
        <CardDate>
        From March 2016
        </CardDate>
        <CardContent>
        He Xiangyu and Liu Wei are among
        74 international artists from 33
        countries chosen to feature in the
        Yinchuan Biennale 2016
        </CardContent>
      </Card>
      <Card>
        <Img src={eventTwo} alt="Event 2" />
        <CardTitle>
          <a href="/">
          Exhibition: Runa Islam at SFMOMA, San Francisco
          </a>
        </CardTitle>
        <CardDate>
        From March 2016
        </CardDate>
        <CardContent>
        ‘Verso’, SFMOMA’s solo
        presentation of Bangladeshi-born
        British artist Runa Islam, features
        the US premiere of Cabinet of
        Prototypes (2009-10)
        </CardContent>
      </Card>
      <Card>
        <Img src={eventThree} alt="Event 3" />
        <CardTitle>
          <a href="/">
          Preview: White Cube Mason’s Yard
          </a>
        </CardTitle>
        <CardDate>
        19 January 2017, 6 to 8pm
        </CardDate>
        <CardContent>
        Join us at Mason's Yard, London for
        the preview of the new Park Seo-Bo
        exhibition curated by Katharine
        Kostyál. Curated by Katharine
        Kostyál
        </CardContent>
      </Card>
    </NewsCards>
  </Section>
);

export default News;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  max-height: 100%;
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

const NewsHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NewsTitle = styled.h2`
  text-align: left;
  margin-left: 5%;
  font-family: Arial Narrow, Arial, sans-serif;
  font-weight: 200;
  font-size: 1.4em;
`;

const NewsSelection = styled.button`
  text-align: right;
  margin-right: 5%;
  font-family: Arial Narrow, Arial, sans-serif;
  font-weight: 50;
  font-size: 1.3em;
  color: gray;
  background: none;
  border:none;
  cursor: pointer;
  &:hover {
    text-decoration: underline gray;
  }
`;

const NewsCards = styled.div`
  display: grid;
  margin 0 5% 0 5%;
  grid-template-columns: repeat(auto-fill, 330px);
  justify-content: space-between;
  padding: 0 0 2em 0;
`;

const Card = styled.div`
  display: block;
  text-align: left;
  font-family: Tahoma, Geneva, sans-serif;
  width: 100%;
`;

const Img = styled.img`
  width: 100%;
  height: auto;
`;

const CardTitle = styled.p`
  margin: 0.5em 0 0 0;
  font-size: 1.3em;
  font-weight: 100;
  text-align: left;
  & a {
    color: black;
    text-decoration: none;
    &:hover {
      text-decoration: underline gray;
    }
  }
`;

const CardDate = styled.p`
  font-size: 1.3em;
  margin:0.1em 0 0 0;
  color: gray;
`;

const CardContent = styled.p`
  font-size: 1.2em;
  font-weight: 100;
  color: gray;
`;
