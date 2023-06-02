import React from "react";
import styled from "@emotion/styled";
import { Button } from "antd";

interface AboutProps {}

const AboutBox = styled.div`
  width: 100%;
`;

const About: React.FC<AboutProps> = (props) => {
  return (
    <AboutBox>
      <Button type={"primary"}>1111111111</Button>
    </AboutBox>
  );
};

export default About;
