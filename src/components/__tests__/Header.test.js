import { render } from "@testing-library/react";
import Header from "../Header";


test("logo shoud load on rendering header",()=>{
    //load header
    const header=render(<Header/>);
    console.log(header);
   } );




