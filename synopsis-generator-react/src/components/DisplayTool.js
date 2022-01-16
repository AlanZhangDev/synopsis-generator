

import React from "react";
import Textbar from "./Textbar";
import Button from "./Button";

const DisplayTool = ({
                         value,
                        onChange,
                        onSubmit,
                        res,
                     }) =>
    <form onSubmit={onSubmit}>
        Book 1:
        <Textbar value={value} onChange={onChange}/>
        <br/>
        Book 2:
        <Textbar value={value} onChange={onChange}/>
        <br/>
        <Button onClick={()=>null}>
            Submit
        </Button>
        <br/>
        <div id="display">
            A
            {res}
        </div>
    </form>

export default DisplayTool;