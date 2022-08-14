import React from "react";

import RMDBLogo from '../../images/shams1.png';
import TMDBLogo from '../../images/tmdb_logo.svg';
import { Wrapper } from "./Header.styles";
import { LogoImg } from "./Header.styles";
import { TMDBLogoImg } from "./Header.styles";
import { Content } from "./Header.styles";

const Header=()=>(
    <Wrapper>
        <Content>
            <LogoImg src={RMDBLogo}alt=""/>
        <p>Aq</p>
            <TMDBLogoImg src={TMDBLogo}/>
        </Content>
    </Wrapper>
);

export default Header;


