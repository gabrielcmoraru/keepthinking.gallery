import React from 'react';
import styled from 'styled-components';
import missingImg from 'assets/missing.jpg';

const artistNames = ['Franz Ackermann', 'Etel Adnan', 'Darren Almond', 'Ellen Altfest', 'Michael Armitage', 'Miroslaw Balka', 'Georg Baselitz', 'Larry Bell', 'Jake & Dinos Chapman', 'Chuck Close', 'Gregory Crewdson', 'Tracey Emin', 'Katharina Fritsch', 'Theaster Gates', 'Gilbert & George', 'Antony Gormley', 'Andreas Gursky', 'David Hammons', 'Mona Hatoum', 'He Xiangyu', 'Damien Hirst', 'Robert Irwin', 'Runa Islam', 'Sergej Jensen', 'Anselm Kiefer', 'Rachel Kneebone', 'Imi Knoebel', 'Elad Lassry', 'Liza Lou', 'Jac Leirner', 'Liu Wei', 'Christian Marclay', 'Josiah McElheny', 'Julie Mehretu', 'Beatriz Milhazes', 'Harland Miller', 'Sarah Morris', 'Gabriel Orozco', 'Damián Ortega', 'Virginia Overton', 'Eddie Peake', 'Magnus Plessen', 'Jessica Rankin', 'Christian Rosa', 'Doris Salcedo', 'Raqib Shaw', 'Haim Steinbach', 'Sam Taylor-Johnson', 'Fred Tomaselli', 'Jeff Wall', 'Cerith Wyn Evans'];

const Artists = () => (
  <Section role="region">
    <ArtistsHeader>
      <ArtistsTitle>Artists</ArtistsTitle>
      <ArtistsSelection type="button">View all</ArtistsSelection>
    </ArtistsHeader>
    <ArtistMenu>
      <ArtistList>
        {artistNames.map(artist => <ArtistName key={artist.toString()}><a href="/">{artist}</a></ArtistName>)}
      </ArtistList>
      <ArtistImagePreview>
        <Img src={missingImg} alt="Artist Image Preview"/>
      </ArtistImagePreview>
    </ArtistMenu>
  </Section>
);

export default Artists;

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

const ArtistsHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ArtistsTitle = styled.h2`
  text-align: left;
  margin-left: 5%;
  font-family: Arial Narrow, Arial, sans-serif;
  font-weight: 200;
  font-size: 1.4em;
`;

const ArtistsSelection = styled.button`
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

const ArtistMenu = styled.div`
  display: flex;

  margin: 3% 5% 7% 5%;
`;

const ArtistList = styled.ul`
  flex:3;
  padding: 0;
  margin: 0;
  list-style: none;
  text-align: left;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr) );
  grid-gap:1em;
`;

const ArtistName = styled.li`
  grid-column: auto;
  font-size: 1.2em;
  & a {
    color: gray;
    text-decoration:none;
    &:hover {
      text-decoration: underline black;
    }
  }
`;

const ArtistImagePreview = styled.div`
  flex:1;
`;

const Img = styled.img`
  width: 100%;
  height: auto;
`;