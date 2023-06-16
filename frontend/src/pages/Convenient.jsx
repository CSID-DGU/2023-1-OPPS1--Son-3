import { useState } from "react";
import styled from "styled-components/macro";
import Footer from "../components/Footer";
import MapImg from "../components/MapImg";
import { conv } from "../lib/convenient";
import convImages from "../lib/convImages";
import PinPosition from "../lib/PinPosition";
import CloseConvList from "../components/Convenient/CloseConvs";
import SerachNav from "../components/Convenient/SearchNav";
const Convenient = () => {
  const [arrivalData, setArrivalData] = useState([]);
  const [arrivalPinPosition, setArrivalPinPosition] = PinPosition([0, 0]);
  const [departurePinPosition, setdeparturePinPosition] = PinPosition([0, 0]);
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const showClose = (closeBuildings, arrival) => {
    const showDataArr = [];
    closeBuildings.map((building) => {
      const buildingName = building.replaceAll(" ", "");
      const img = convImages[arrival][buildingName];
      const showData = {
        img: img,
        title: building,
      };
      showDataArr.push(showData);
    });
    setArrivalData(showDataArr);
  };

  function handleOnSubmit(e) {
    e.preventDefault();
    const departures = e.target[0].value.replaceAll(" ", "");
    const arrivals = e.target[1].value.replaceAll(" ", "");
    //가장 가까운 건물명 알아내는 알고리즘
    const destinations = conv[departures][arrivals];
    showClose(destinations, arrivals);
    //arrivaldata가 설정되고(이미지 경로, 위치(ex 원흥관 3층))
    setdeparturePinPosition(departures);
    //departurepinposition을 설정(mapimg컴포넌트에서 사용)
    //pinposition함수에서 departure의 핀 좌표와 핀좌표 설정 함수 반환
    //목표 건물
    let newDestination = destinations[0].split(" ")[0];
    setArrivalPinPosition(newDestination);
    //동일하게 arrivalPinPosition 설정(좌표)
    setArrival(newDestination);
    //층빼고 이름만 arrvial로 설정
    setDeparture(departures);
    //출발건물 departure설정
  }

  return (
    <>
      <Section className="Section">
        <Pins>
          <PinWrapper>
            <PinName>출발 건물</PinName>
            <Pin pinSrc={"/markImgs/MapMark.svg"}></Pin>
          </PinWrapper>
          <PinWrapper>
            <PinName>편의시설</PinName>
            <Pin pinSrc={"/markImgs/MapMark2.svg"}></Pin>
          </PinWrapper>
        </Pins>
        <SearchContainer>
          <SerachNav handleOnSubmit={handleOnSubmit}></SerachNav>
          <MapImg
            arrivalPinX={arrivalPinPosition[0]}
            arrivalPinY={arrivalPinPosition[1]}
            departurePinX={departurePinPosition[0]}
            departurePinY={departurePinPosition[1]}
            convenient={true}
          ></MapImg>
        </SearchContainer>
        <CloseConvList
          arrivalData={arrivalData}
          arrival={arrival}
          departure={departure}
        ></CloseConvList>
      </Section>
      <Footer></Footer>
    </>
  );
};
export default Convenient;
//반응형
const Section = styled.section`
  display: flex;
  height: 100vh;
  position: relative;
  @media screen and (max-width: 600px) {
    header input {
      padding: 1px;
      width: 6rem;
      text-align: center;
      height: 30px;
    }
    *:not(footer > *) {
      font-size: 0.8rem;
    }
    #icon {
      display: none;
    }
    button {
      width: 3rem;
      height: 1.5rem;
    }
    flex-direction: column;
    height: auto;
    #convenientList {
      margin: 0;
      width: auto;
      img {
        width: 50%;
      }
    }
  }
  @media screen and (min-width: 601px) and (max-width: 900px) {
    flex-direction: column;
    height: auto;
    #convenientList {
      margin: 0;
      width: auto;
      img {
        width: 40%;
      }
    }
    *:not(footer > *) {
      font-size: 1.2rem;
    }
    header > form {
      flex-shrink: 1;
      input {
        padding: 2px;
        width: 8rem;
        height: 40px;
      }
    }
    button {
      width: 4rem;
      height: 2rem;
    }
    #icon {
      display: none;
    }
  }
  @media screen and (max-width: 1200px) and(min-width: 800px) {
    flex-direction: column;
    height: auto;
    #convenientList {
      margin: 0;
      width: auto;
    }
    header > form {
      flex-shrink: 1;
      input {
        width: 140px;
        height: 50px;
      }
    }
    *:not(footer > *) {
      font-size: 1.5rem;
    }
  }
`;
//핀 정보
const Pins = styled.div`
  position: absolute;
  top: 120px;
  left: 15%;
  z-index: 1;
`;
const PinWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  justify-content: flex-end;
`;
const Pin = styled.div`
  background-image: url(${(props) => `${props.pinSrc}`});
  background-size: cover;
  background-repeat: no-repeat;
  width: 20px;
  height: 35px;
`;
const PinName = styled.p``;
const SearchContainer = styled.article`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
