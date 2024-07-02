import { useEffect, useState } from "react";
import styled from "styled-components";
import GridList from "./Grid/GridList";
import RelBox from "./RelBox/RelBox";
import SizedBox from "./SizedBox/SizedBox";
import Par from "./Text/Par";
import Txt1 from "./Text/Txt1";
import Txt2 from "./Text/Txt2";
import Txt3 from "./Text/Txt3";
import { motion } from "framer-motion";
import { BigButton, MedButton, SmallButton } from "./Buttons/Buttons";
import { OneInput } from "./Inputs/Inputs";


const Home = () => {

  return (
    <RelBox w={50} h={50} className={"center"}>
      <Txt3 fs={20}>Hi There</Txt3>
    </RelBox>
  );
};

export default Home;