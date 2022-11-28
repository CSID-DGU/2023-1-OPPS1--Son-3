import { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Map_Icon } from "../asset/Map_Icon.svg";
import Footer from "../components/Footer";
import Search from "../components/Search";
import { Link } from "react-router-dom";
import { conv } from "../lib/convenient";
import convImages from "../lib/convImages";
import PinPosition from "../lib/PinPosition";
const Convenient = () => {
  const [destination, setDestination] = useState(null);
  const [arrivalPinPosition, setArrivalPinPosition] = PinPosition([0, 0]);
  const [arrivalData, setArrivalData] = useState([]);
  const [departurePinPosition, setdeparturePinPosition] = PinPosition([0, 0]);

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
  console.log(arrivalPinPosition, "?????");
  function handleOnSubmit(e) {
    e.preventDefault();
    const departures = e.target[0].value.replaceAll(" ", "");
    const arrivals = e.target[1].value.replaceAll(" ", "");
    //가장 가까운 건물명 알아내는 알고리즘
    const destinations = conv[departures][arrivals];
    showClose(destinations, arrivals);
    setdeparturePinPosition(departures);
    //목표 건물
    let newDestination = destinations[0].split(" ")[0];
    setArrivalPinPosition(newDestination);
    setDestination(newDestination);
  }
  return (
    <>
      <Section className="Section">
        <Search
          arrivalPinX={arrivalPinPosition[0]}
          arrivalPinY={arrivalPinPosition[1]}
          departurePinX={departurePinPosition[0]}
          departurePinY={departurePinPosition[1]}
          handleOnSubmit={handleOnSubmit}
          destination={destination}
          convenient={true}
        ></Search>
        <Article id="convenientList">
          <h1>가까운 편의시설</h1>
          <ConvList>
            {arrivalData.map((data) => {
              return (
                <div>
                  <ConvTitle>{`<${data.title}>`}</ConvTitle>
                  <ConvImg src={data.img}></ConvImg>
                </div>
              );
            })}
          </ConvList>
          <Map_Icon_Container>
            <Link to={"/map"}>
              <Map_Icon width="70" height="70"></Map_Icon>
              <Map_Span>길찾기</Map_Span>
            </Link>
          </Map_Icon_Container>
        </Article>
      </Section>
      <Footer></Footer>
    </>
  );
};
export default Convenient;
const Section = styled.section`
  display: flex;
  height: 100vh;
  @media screen and (max-width: 600px) {
    header input {
      padding: 1px;
      width: 4.5rem;
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
    }
  }
  @media screen and (min-width: 601px) and (max-width: 900px) {
    flex-direction: column;
    height: auto;
    #convenientList {
      margin: 0;
      width: auto;
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
const Map_Icon_Container = styled.div`
  margin-left: auto;
  margin-right: 15px;
`;

const Article = styled.article`
  background-color: rgb(243, 202, 89);
  overflow-x: hidden;
  height: 100%;
  width: 300px;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border: 2.8px black solid;
  > * {
    font-size: 25px;
    text-align: center;
  }
`;

const Map_Span = styled.span`
  display: block;
  font-size: 20px;
`;
const ConvList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  overflow: scroll;
`;
const ConvTitle = styled.h5`
  padding: 0;
  margin: 5px 0;
`;
const ConvImg = styled.img`
  width: 90%;
  height: 190px;
  border-radius: 5px;
`;
