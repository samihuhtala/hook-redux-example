import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import { Buttons } from "./components/dateapp/Buttons";
import { DateCard } from "./components/dateapp/DateCard";
import { TopBar } from "./components/dateapp/TopBar";
import * as ReactRedux from "react-redux";
import { swipeRight, fetchRandomUser, swipeLeft } from './redux';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
    font-family: 'Quicksand', sans-serif;
    font-weight: bold;
  }
`;

const IPhoneBackground = styled.div`
  background-color: rgb(250, 250, 250);
  background-image: url("https://raw.githubusercontent.com/Wombbu/rekry/master/ui/public/iphone.png");
  background-size: 600px;
  background-repeat: no-repeat;
  background-position: center center;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const PhoneDisplayWrapper = styled.div`
  position: absolute;
  margin: auto;
  background-color: #fff;
  width: 265px;
  height: 470px;
  top: -3px;
  bottom: 0;
  left: 1px;
  right: -0.5px;
  border-radius: 3px;
  border: 2px solid rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  align-items: stretch;
  overflow: hidden;
`;

function Appwithredux(props) {
  const {swipeStatus, swipeRight,swipeLeft, fetchRandomUser, loading, response} = props;
  React.useEffect(() => {
    if (swipeStatus === 'CENTER')return;
    setTimeout(() => fetchRandomUser(), 600)
  },[swipeStatus]);

  return (
    <IPhoneBackground>
      <GlobalStyle />
      <PhoneDisplayWrapper>
        <TopBar />
        {loading || !response ? <div style={{flex: 1}} /> : (
          <DateCard
            imageUrl={
              response.picture.thumbnail
            }
            name={response.name.first}
            age={response.dob.age}
            swipeStatus={swipeStatus}
          />
        )}
        <Buttons
          onAccept={() => swipeRight()}
          onDecline={() => swipeLeft()}
        />
      </PhoneDisplayWrapper>
    </IPhoneBackground>
  );
}
const mapStateToProps = (state) => ({
  swipeStatus: state.swipeStatus,
  loading: state.loading,
  response: state.response
});

const mapDispatchToProps = dispatch => ({
  swipeRight: () => dispatch(swipeRight()),
  swipeLeft: () => dispatch(swipeLeft()),
  fetchRandomUser: () => dispatch(fetchRandomUser())
});

export default ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Appwithredux);
