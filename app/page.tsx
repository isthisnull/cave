"use client";
import Row from "@/src/frontend/components/common/Row";
import React from "react";
import styled from "styled-components";
const KirEl = styled(Row)`
  font-weight: 600;
  font-size: 3rem;
  background-color: red;
  transition: 0.4s ease-in;
  &:hover {
    transform: translateX(50px);
  }
`;
function page() {
  return <KirEl>hi</KirEl>;
}

export default page;
