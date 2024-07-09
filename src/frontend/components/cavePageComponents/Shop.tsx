"use client";
import Row from "@/src/frontend/components/common/Row";
import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faUser,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";

const ContainerEl = styled(Row)`
  width: 360px;
  justify-content: center;
  @media (max-width: 391px) {
    width: 390px;
  }
`;
const SecConEl = styled(Row)`
  width: calc(100% - 30px);
  flex-direction: column;
`;
const AboutConEl = styled(Row)`
  margin-top: 25px;
  gap: 10px;
  flex-direction: column;
`;
const AboutTextEl = styled(Row)`
  font-weight: bold;
`;
const AboutInfoTextEl = styled(Row)`
  color: rgba(0, 0, 0, 0.5);
  font-weight: 700;
  font-size: 0.8rem;
`;
const LengthConEl = styled(Row)`
  margin-top: 25px;
  font-weight: bold;
  width: 100%;
  justify-content: space-between;
`;
const LengthEl = styled(Row)`
  align-items: center;
  gap: 10px;
`;
const CountEl = styled.input.attrs({
  type: "number",
  min: 0,
})`
  font-size: 1rem;
  font-weight: 800;
  width: 30px;
  text-align: center;
  border: none;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }

  &::placeholder {
    justify-content: center;
  }
`;
const DaysTextEl = styled(Row)``;
const CountConEl = styled(Row)`
  margin-bottom: 20px;
  justify-content: space-between;
  font-weight: 700;
  margin-top: 20px;
  align-items: center;
`;
const PersonsTextEl = styled(Row)`
  align-items: center;
  gap: 10px;
`;
const IncButtonEl = styled.button`
  background-color: #000000;
  color: white;
  border: none;
  padding: 7px 9px;
  font-size: 0.8rem;
  border-radius: 6px;
`;
const DecButtonEl = styled.button`
  background-color: #000000;
  color: white;
  border: none;
  padding: 7px 9px;
  font-size: 0.8rem;
  border-radius: 6px;
`;
const CounterConEl = styled(Row)`
  align-items: center;
`;
const BookConEl = styled(Row)`
  margin-top: 40px;
  justify-content: space-between;
`;
const PriceConEl = styled(Row)`
  flex-direction: column;
  justify-content: center;
`;
const PriceEl = styled(Row)`
  justify-content: center;
  font-size: 1.2rem;
  font-weight: 700;
`;
const TicketEl = styled(Row)`
  font-size: 0.8rem;
  font-weight: 600;
  color: rgba(75, 75, 75, 0.3);
`;

const TravelerEl = styled(Row)`
  margin-bottom: 30px;
  position: relative;
  width: 100%;
  height: 20px;
`;

const T1El = styled(Row)`
  position: absolute;
  left: 0;
  top: 0;
`;
const T2El = styled(Row)`
  position: absolute;
  left: 40px;
  top: 0;
`;
const T3El = styled(Row)`
  position: absolute;
  left: 80px;
  top: 0;
`;
const T4El = styled(Row)`
  position: absolute;
  left: 120px;
  top: 0;
`;
const T5El = styled(Row)`
  position: absolute;
  left: 160px;
  top: 0;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 3px solid white;
  width: 55px;
  height: 55px;
  background-color: #65c8e0;
  font-size: medium;
  font-weight: 700;
`;
const ImageEl = styled(Row)`
  border-radius: 50%;
  border: 3px solid white;
  overflow: hidden;
`;
const BookNowButEl = styled.button`
  color: white;
  border: none;
  font-size: 1.3rem;
  padding: 15px 60px;
  border-radius: 15px;
  font-weight: 600;
  background-color: black;
`;
export default function Shop() {
  const [inputvalue, setInputvalue] = useState(0);
  const handleInputChange = (e: any) => {
    setInputvalue(e.target.value);
  };
  return (
    <ContainerEl>
      <SecConEl>
        <AboutConEl>
          <AboutTextEl>About the place</AboutTextEl>
          <AboutInfoTextEl>
            Start an adventure with a 3-day journey in Iceland and explore the
            caves
          </AboutInfoTextEl>
        </AboutConEl>
        <LengthConEl>
          <LengthEl>
            <FontAwesomeIcon icon={faClock} style={{ color: "#cacaca" }} />
            Length
          </LengthEl>
          <DaysTextEl> 14 Days</DaysTextEl>
        </LengthConEl>
        <CountConEl>
          <PersonsTextEl>
            <FontAwesomeIcon icon={faUser} style={{ color: "#c0c0c0" }} />
            Persons
          </PersonsTextEl>
          <CounterConEl>
            <DecButtonEl
              onClick={() => {
                if (inputvalue > 0) {
                  setInputvalue(inputvalue - 1);
                } else {
                  setInputvalue(inputvalue);
                }
              }}
            >
              <FontAwesomeIcon icon={faMinus} style={{ color: "#ffffff" }} />
            </DecButtonEl>
            <CountEl
              value={inputvalue}
              onChange={() => {
                handleInputChange;
              }}
            ></CountEl>
            <IncButtonEl
              onClick={() => {
                setInputvalue(inputvalue + 1);
              }}
            >
              <FontAwesomeIcon icon={faPlus} style={{ color: "#ffffff" }} />
            </IncButtonEl>
          </CounterConEl>
        </CountConEl>
        <TravelerEl>
          <T1El>
            <ImageEl>
              <Image
                src="/assets/dsss.jpg"
                width={50}
                height={50}
                style={{ objectFit: "cover" }}
                alt=""
              ></Image>
            </ImageEl>
          </T1El>
          <T2El>
            <ImageEl>
              <Image
                src="/assets/sssd.jpg"
                width={50}
                height={50}
                style={{ objectFit: "cover" }}
                alt=""
              ></Image>
            </ImageEl>
          </T2El>
          <T3El>
            <ImageEl>
              <Image
                src="/assets/222.jpg"
                width={50}
                height={50}
                style={{ objectFit: "cover" }}
                alt=""
              ></Image>
            </ImageEl>
          </T3El>
          <T4El>
            <ImageEl>
              <Image
                src="/assets/s2s2.jpg"
                width={50}
                height={50}
                style={{ objectFit: "cover" }}
                alt=""
              ></Image>
            </ImageEl>
          </T4El>
          <T5El>+23</T5El>
        </TravelerEl>
        <BookConEl>
          <PriceConEl>
            <PriceEl>${inputvalue * 400}</PriceEl>
            <TicketEl>({inputvalue} Tickets)</TicketEl>
          </PriceConEl>
          <BookNowButEl>Book Now</BookNowButEl>
        </BookConEl>
      </SecConEl>
    </ContainerEl>
  );
}
