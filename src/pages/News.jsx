import React from 'react';
import styled from 'styled-components';
import Data from 'assets/events.js';

const News = () => (
  <Section role="region">
    <NewsHeader>
      <NewsTitle>News & Events</NewsTitle>
      <NewsSelection type="button">View all</NewsSelection>
    </NewsHeader>
    <NewsCards>
      { Data.events.map(event =>
          (<Card key={event.id}>
            <Img src={event.image} alt={event.name} />
            <CardTitle>
              <a href="/">
                {event.title}
              </a>
            </CardTitle>
            <CardDate>
              {event.date}
            </CardDate>
            <CardContent>
              {event.content}
            </CardContent>
          </Card>),
        )
      }
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
  grid-template-columns: repeat(auto-fit, 330px);
  justify-content: space-between;
  padding: 0 0 2em;
  @media (max-width: 1226px) {
    justify-content: space-around;
  }
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
