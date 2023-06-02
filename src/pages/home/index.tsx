import React from "react";
import styled from "@emotion/styled";

interface HomeProps {}

const HomeBox = styled.div`
  width: 100%;
`;

const Home: React.FC<HomeProps> = (props) => {
  return <HomeBox>Home</HomeBox>;
};

export default Home;
