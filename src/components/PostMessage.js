import React, {useState } from "react";
import PopUpInputfield from "./PopUpInputfield";
import "./style.css";

function PostMessage(props) {

  const [showGifSearchBox, setshowGifSearchBox] = useState(false);

  const [inputValue, setInputValue]= useState('');
  console.log(inputValue);

 const gifButton = ()=>{
  setshowGifSearchBox(prev => !prev);
 }
 
 const postMsg = (e) =>{
  setInputValue(e.target.value);
 }

  return (
    <div className="PostMessage">

      {/* WRITE MEASSAGE INPUT FIELD START */}
      <div className="writeText">
        <span>
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            className="profileImg" alt=''
          />
        </span>
        <span> 
          <input
            type="text"
            placeholder="Write something here..."
            className="writePostMessage" 
            value={inputValue}
            onChange={postMsg}
          >
        </input>
        </span>
      </div>
      
      {/* WRITE MEASSAGE INPUT FIELD END */}
     

     {/* GIF SEARCH BUTTON START*/}
      <div className="optionsSearch">
        <button
          variant="contained"
          className="gifBox optionsSearchInsideFlexBox"
          onClick={gifButton}
        >
          <div className="material-icons icons">gif_box</div>
          <div className="gif-text icons-text">GIF</div>
        </button>
      </div>
       {/* GIF SEARCH BUTTON END*/}

     {showGifSearchBox ? <PopUpInputfield /> : null}
     
    </div>
  );
}

export default PostMessage;
