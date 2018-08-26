import React from 'react';
import styled from 'styled-components';
import ResponsiveEmbed from 'react-responsive-embed';

const Channel = () => (
  <Section role="region">
    <ChannelHeader>
      <ChannelTitle>Channel</ChannelTitle>
      <ChannelSelection type="button">View all</ChannelSelection>
    </ChannelHeader>
    <VideoWrap>
      <ResponsiveEmbed src="https://www.youtube-nocookie.com/embed/vlm5tgistqA?rel=0&amp;controls=0&amp;showinfo=0" ratio="16:9" />
    </VideoWrap>
    <VideoInfo>
      <VideoTitle>
        <strong>Anselm Kiefer</strong><br />
        In conversation with Tim Marlow
        In the Auditorium
      </VideoTitle>
      <VideoDescription>
        In this film Anselm Kiefer discusses his work and his exhibition
        ‘Walhalla’ at White Cube Bermondsey with Tim Marlow.
      </VideoDescription>
    </VideoInfo>
  </Section>
);


export default Channel;

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

const ChannelHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChannelTitle = styled.h2`
  text-align: left;
  margin-left: 5%;
  font-family: Arial Narrow, Arial, sans-serif;
  font-weight: 200;
  font-size: 1.4em;
`;

const ChannelSelection = styled.button`
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

const VideoWrap = styled.div`
  margin: 0 5% 2%;
`;

const VideoInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 5% 7% 5%;
  text-align: left;
  font-family: Tahoma, Geneva, sans-serif;
`;

const VideoTitle = styled.p`
  margin:0;
  padding: 0 1em 0 0;
  flex:1;
`;

const VideoDescription = styled.p`
  margin:0;
  padding: 0 0 0 1em;
  flex:2;
`;
