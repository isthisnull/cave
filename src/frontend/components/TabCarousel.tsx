"use client";
import Row from "@/src/frontend/components/common/Row";
import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import AllTabContent from "./AllTabContent";
import AdventuresTanContent from "./AdventuresTanContent";
import CavesTabContent from "./CavesTabContent";

const ActiveButColor =
  "linear-gradient(142deg, rgba(16,69,91,1) 0%, rgba(69,146,164,1) 92%, rgba(100,163,177,1) 100%);";
const NonActiveButColor = "rgba(245, 245, 245, 0.6);";
const ActiveFontColor = "white";
const NonActiveFontColor = "rgba(153, 153, 153, 0.6);";

const ContainerEl = styled(Row)`
  margin-top: 10px;
  width: 360px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  /*   background-color: violet; */
`;

const TabsEl = styled(Row)`
  overflow: auto hidden;
  width: 100%;
  /* scrollbar-color: #ffffff #ffffff; */
  padding-left: 15px;
  /*   background-color: red; */
  gap: 6px;
  font-size: 0.7rem;
  font-weight: 700;
`;

function TabCarousel() {
  const [tab, setTab] = useState("all");

  const AllTabEl = styled(Row)`
    border-radius: 9px;
    cursor: pointer;
    background: ${tab === "all" ? `${ActiveButColor}` : `${NonActiveButColor}`};
    padding: 9px 16px;
    color: ${tab === "all" ? `${ActiveFontColor}` : `${NonActiveFontColor}`};
  `;
  const AdventuresTabEl = styled(Row)`
    border-radius: 9px;
    cursor: pointer;
    background: ${tab === "adventures"
      ? `${ActiveButColor}`
      : `${NonActiveButColor}`};
    padding: 9px 16px;
    color: ${tab === "adventures"
      ? `${ActiveFontColor}`
      : `${NonActiveFontColor}`};
  `;
  const CavesTabEl = styled(Row)`
    border-radius: 9px;
    cursor: pointer;
    background: ${tab === "caves"
      ? `${ActiveButColor}`
      : `${NonActiveButColor}`};
    padding: 9px 16px;
    color: ${tab === "caves" ? `${ActiveFontColor}` : `${NonActiveFontColor}`};
  `;
  const Test1TabEl = styled(Row)`
    border-radius: 9px;
    cursor: pointer;
    background: ${tab === "test1"
      ? `${ActiveButColor}`
      : `${NonActiveButColor}`};
    padding: 9px 16px;
    color: ${tab === "test1" ? `${ActiveFontColor}` : `${NonActiveFontColor}`};
  `;
  const Test2TabEl = styled(Row)`
    border-radius: 9px;
    cursor: pointer;
    background: ${tab === "test2"
      ? `${ActiveButColor}`
      : `${NonActiveButColor}`};
    padding: 9px 16px;
    color: ${tab === "test2" ? `${ActiveFontColor}` : `${NonActiveFontColor}`};
  `;
  const Test3TabEl = styled(Row)`
    border-radius: 9px;
    cursor: pointer;
    background: ${tab === "test3"
      ? `${ActiveButColor}`
      : `${NonActiveButColor}`};
    padding: 9px 16px;
    color: ${tab === "test3" ? `${ActiveFontColor}` : `${NonActiveFontColor}`};
  `;
  const Test4TabEl = styled(Row)`
    border-radius: 9px;
    cursor: pointer;
    background: ${tab === "test4"
      ? `${ActiveButColor}`
      : `${NonActiveButColor}`};
    padding: 9px 16px;
    color: ${tab === "test4" ? `${ActiveFontColor}` : `${NonActiveFontColor}`};
  `;
  const AllTabContentEl = styled(Row)`
    display: ${tab === "all" ? "block" : "none"};
  `;
  const AdventuresTabContentEl = styled(Row)`
    display: ${tab === "adventures" ? "block" : "none"};
  `;
  const CavesTabContentEl = styled(Row)`
    display: ${tab === "caves" ? "block" : "none"};
  `;
  const Test1TabContentEl = styled(Row)`
    display: ${tab === "test1" ? "block" : "none"};
  `;
  const Test2TabContentEl = styled(Row)`
    display: ${tab === "test2" ? "block" : "none"};
  `;
  const Test3TabContentEl = styled(Row)`
    display: ${tab === "test3" ? "block" : "none"};
  `;
  const Test4TabContentEl = styled(Row)`
    display: ${tab === "test4" ? "block" : "none"};
  `;

  return (
    <ContainerEl>
      <TabsEl>
        <AllTabEl
          onClick={() => {
            setTab("all");
          }}
        >
          All
        </AllTabEl>
        <AdventuresTabEl
          onClick={() => {
            setTab("adventures");
          }}
        >
          Adventures
        </AdventuresTabEl>
        <CavesTabEl
          onClick={() => {
            setTab("caves");
          }}
        >
          Caves
        </CavesTabEl>
        <Test1TabEl
          onClick={() => {
            setTab("test1");
          }}
        >
          Test1
        </Test1TabEl>
        <Test2TabEl
          onClick={() => {
            setTab("test2");
          }}
        >
          Test2
        </Test2TabEl>
        <Test3TabEl
          onClick={() => {
            setTab("test3");
          }}
        >
          Test3
        </Test3TabEl>
        <Test4TabEl
          onClick={() => {
            setTab("test4");
          }}
        >
          Test4
        </Test4TabEl>
      </TabsEl>
      <AllTabContentEl>
        <AllTabContent />
      </AllTabContentEl>
      <AdventuresTabContentEl>
        <AdventuresTanContent />
      </AdventuresTabContentEl>
      <CavesTabContentEl>
        <CavesTabContent />
      </CavesTabContentEl>
      <Test1TabContentEl>im test1 TAB ELS</Test1TabContentEl>
      <Test2TabContentEl>im test2 TAB ELS</Test2TabContentEl>
      <Test3TabContentEl>im test3 TAB ELS</Test3TabContentEl>
      <Test4TabContentEl>im test4 TAB ELS</Test4TabContentEl>
    </ContainerEl>
  );
}

export default TabCarousel;
