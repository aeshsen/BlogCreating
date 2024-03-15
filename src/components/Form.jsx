import React, { useContext, useRef } from "react";
import { Recivedata } from "../store/Storedata";

function Form() {
  const { adddata } = useContext(Recivedata);

  const titlename = useRef();
  const titledecription = useRef();
  const titletags = useRef();
  let userid = 0;

  const handleSubmit = (event) => {
    event.preventDefault();

    const Title = titlename.current.value;
    const Descr = titledecription.current.value;
    const Tags = titletags.current.value;
    if (Title !== " " || Descr !== " " || Tags !== " ") {
      userid++;
      adddata(Title, Descr, Tags, userid);
      titlename.current.value = " ";
      titledecription.current.value = " ";
      titletags.current.value = " ";
    }
  };

  return (
    <form onSubmit={handleSubmit} className="Formcontainer">
        <div className="formdiv">

        <input
        type="text"
        placeholder="enter your tittle" className="forminput"
        required
        ref={titlename}
      />{" "}
      <br />
      <input
        type="text"
        className="formdecription"
        placeholder="enter your decription"
        required
        ref={titledecription}
      />{" "}
      <br />
      <input type="text" placeholder="hastags" required ref={titletags} className="formtags" /> <br />
      <input type="submit" value={"POST"}  className="formsubmitbtn"/>

        </div>
      
    </form>
  );
}

export default Form;
