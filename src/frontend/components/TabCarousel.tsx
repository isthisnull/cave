"use client";
import Row from "@/src/frontend/components/common/Row";
import React, { useState } from "react";
import styled from "styled-components";
import AllTabContent from "./AllTabContent";
import AdventuresTanContent from "./AdventuresTanContent";
import CavesTabContent from "./CavesTabContent";
import Menu from "./Menu";
import Profile from "./Profile";
import Search from "./Search";

const ActiveButColor =
  "linear-gradient(142deg, rgba(16,69,91,1) 0%, rgba(69,146,164,1) 92%, rgba(100,163,177,1) 100%);";
const NonActiveButColor = "rgba(245, 245, 245, 0.6);";
const ActiveFontColor = "white";
const NonActiveFontColor = "rgba(153, 153, 153, 0.6);";

const MainConEl = styled(Row)`
  margin-top: 10px;
  width: 360px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  @media (min-width: 319px) {
    width: 320px;
  }
  @media (min-width: 374px) {
    width: 375px;
  }
  @media (min-width: 411px) {
    width: 412px;
  }
  @media (min-width: 424px) {
    width: 425px;
  }
  @media (min-width: 767px) {
    width: 768px;
  }
`;

const TabsEl = styled(Row)`
  overflow: auto hidden;
  width: 100%;
  padding-left: 15px;
  gap: 8px;
  font-size: 0.7rem;
  font-weight: 700;
`;
const AllTabEl = styled(Row)<{ background: string; color: string }>`
  border-radius: 9px;
  cursor: pointer;
  background: ${(e) =>
    e.background === "all" ? `${ActiveButColor}` : `${NonActiveButColor}`};
  padding: 11px 20px;
  color: ${(e) =>
    e.color === "all" ? `${ActiveFontColor}` : `${NonActiveFontColor}`};
`;
const AdventuresTabEl = styled(Row)<{ background: string; color: string }>`
  border-radius: 9px;
  cursor: pointer;
  background: ${(e) =>
    e.background === "adventures"
      ? `${ActiveButColor}`
      : `${NonActiveButColor}`};
  padding: 11px 20px;
  color: ${(e) =>
    e.color === "adventures" ? `${ActiveFontColor}` : `${NonActiveFontColor}`};
`;
const CavesTabEl = styled(Row)<{ background: string; color: string }>`
  border-radius: 9px;
  cursor: pointer;
  background: ${(e) =>
    e.background === "caves" ? `${ActiveButColor}` : `${NonActiveButColor}`};
  padding: 11px 20px;
  color: ${(e) =>
    e.color === "caves" ? `${ActiveFontColor}` : `${NonActiveFontColor}`};
`;
const Test1TabEl = styled(Row)<{ background: string; color: string }>`
  border-radius: 9px;
  cursor: pointer;
  background: ${(e) =>
    e.background === "test1" ? `${ActiveButColor}` : `${NonActiveButColor}`};
  padding: 11px 20px;
  color: ${(e) =>
    e.color === "test1" ? `${ActiveFontColor}` : `${NonActiveFontColor}`};
`;
const Test2TabEl = styled(Row)<{ background: string; color: string }>`
  border-radius: 9px;
  cursor: pointer;
  background: ${(e) =>
    e.background === "test2" ? `${ActiveButColor}` : `${NonActiveButColor}`};
  padding: 11px 20px;
  color: ${(e) =>
    e.color === "test2" ? `${ActiveFontColor}` : `${NonActiveFontColor}`};
`;
const Test3TabEl = styled(Row)<{ background: string; color: string }>`
  border-radius: 9px;
  cursor: pointer;
  background: ${(e) =>
    e.background === "test3" ? `${ActiveButColor}` : `${NonActiveButColor}`};
  padding: 11px 20px;
  color: ${(e) =>
    e.color === "test3" ? `${ActiveFontColor}` : `${NonActiveFontColor}`};
`;
const Test4TabEl = styled(Row)<{ background: string; color: string }>`
  border-radius: 9px;
  cursor: pointer;
  background: ${(e) =>
    e.background === "test4" ? `${ActiveButColor}` : `${NonActiveButColor}`};
  padding: 11px 20px;
  color: ${(e) =>
    e.color === "test4" ? `${ActiveFontColor}` : `${NonActiveFontColor}`};
`;

const AllTabContentEl = styled(Row)<{ display?: string }>`
  display: ${(e) => (e.display === "all" ? "block" : "none")};
`;
const AdventuresTabContentEl = styled(Row)<{ display?: string }>`
  display: ${(e) => (e.display === "adventures" ? "block" : "none")};
`;
const CavesTabContentEl = styled(Row)<{ display?: string }>`
  display: ${(e) => (e.display === "caves" ? "block" : "none")};
`;
const Test1TabContentEl = styled(Row)<{ display?: string }>`
  display: ${(e) => (e.display === "test1" ? "block" : "none")};
`;
const Test2TabContentEl = styled(Row)<{ display?: string }>`
  display: ${(e) => (e.display === "test2" ? "block" : "none")};
`;
const Test3TabContentEl = styled(Row)<{ display?: string }>`
  display: ${(e) => (e.display === "test3" ? "block" : "none")};
`;
const Test4TabContentEl = styled(Row)<{ display?: string }>`
  display: ${(e) => (e.display === "test4" ? "block" : "none")};
`;

function TabCarousel() {
  const [tab, setTab] = useState("all");

  return (
    <MainConEl>
      <Profile />
      <Search />
      <TabsEl>
        <AllTabEl
          background={tab}
          color={tab}
          onClick={() => {
            setTab("all");
          }}
        >
          All
        </AllTabEl>
        <AdventuresTabEl
          background={tab}
          color={tab}
          onClick={() => {
            setTab("adventures");
          }}
        >
          Adventures
        </AdventuresTabEl>
        <CavesTabEl
          background={tab}
          color={tab}
          onClick={() => {
            setTab("caves");
          }}
        >
          Caves
        </CavesTabEl>
        <Test1TabEl
          background={tab}
          color={tab}
          onClick={() => {
            setTab("test1");
          }}
        >
          Test1
        </Test1TabEl>
        <Test2TabEl
          background={tab}
          color={tab}
          onClick={() => {
            setTab("test2");
          }}
        >
          Test2
        </Test2TabEl>
        <Test3TabEl
          background={tab}
          color={tab}
          onClick={() => {
            setTab("test3");
          }}
        >
          Test3
        </Test3TabEl>
        <Test4TabEl
          background={tab}
          color={tab}
          onClick={() => {
            setTab("test4");
          }}
        >
          Test4
        </Test4TabEl>
      </TabsEl>
      <AllTabContentEl display={tab}>
        <AllTabContent />
      </AllTabContentEl>
      <AdventuresTabContentEl display={tab}>
        <AdventuresTanContent />
      </AdventuresTabContentEl>
      <CavesTabContentEl display={tab}>
        <CavesTabContent />
      </CavesTabContentEl>
      <Test1TabContentEl display={tab}>im test1 TAB ELS</Test1TabContentEl>
      <Test2TabContentEl display={tab}>im test2 TAB ELS</Test2TabContentEl>
      <Test3TabContentEl display={tab}>im test3 TAB ELS</Test3TabContentEl>
      <Test4TabContentEl display={tab}>im test4 TAB ELS</Test4TabContentEl>
      <Menu />
    </MainConEl>
  );
}

export default TabCarousel;
