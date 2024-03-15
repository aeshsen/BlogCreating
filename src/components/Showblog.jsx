import React, { useContext } from "react";
import ListBlog from "./ListBlog";
import { Recivedata } from "../store/Storedata";

function Showblog() {
   const {datalists} = useContext(Recivedata);

  return (
    <div className="boxontainer">

     {datalists.map((itemlist) => <ListBlog formdata ={itemlist} ></ListBlog>  )}   
   

    </div>
  );
}

export default Showblog;
