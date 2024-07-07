"use client";
import Row from "@/src/frontend/components/common/Row";
import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

const ContainerEl = styled(Row)`
  width: 360px;
  justify-content: center;
`;
function CavesTabContent() {
  return <ContainerEl>drop here its Caves Tab</ContainerEl>;
}

export default CavesTabContent;
