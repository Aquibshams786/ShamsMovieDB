import React from "react";

//styles

import { Wrapper } from "./Button.styles";

const Mutton=({text,callback})=>(
    <Wrapper type="button" onClick={callback}>
        {text}
    </Wrapper>
);
export default Mutton;