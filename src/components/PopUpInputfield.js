import React, { useState } from "react";
import { TextField  ,ImageList, ImageListItem} from "@mui/material";
import "./style.css";
import GifSelected from "./GifSelected";

const TOKEN = "169Otpeabu4SL1ONuYhzS3fCIosq13JA";
const API_URL = "https://api.giphy.com/v1/gifs/search?api_key=" + TOKEN;


function PopUpInputfield(props) {

  const [searchValue, setSearchValue] = useState("");
  // console.log(search);
  const [gifs, setGifs] = useState([]);
  // // console.log(gifs);

  async function requestGifs() {
    fetch(API_URL + "&q=" + searchValue)
      .then(function (response) {
        // console.log(response);
        return response.json();
      })
      .then(function (giphyData) {
        setGifs(giphyData.data);
      });
  }

  const [selectedGifUrl, setSelectedGifUrl] = useState("");

  const onSelectGif = (e) => {
    const onSelectedGif = e.target.src;
    console.log(onSelectedGif);
    setSelectedGifUrl(onSelectedGif);
  };

  return (
    <>
    {/* <div>{<img src={selectedGifUrl} />}</div> */}
    
    <GifSelected selectedGifUrl={selectedGifUrl} className='GifSelected'/>
    
    <div className="PopUpInputfield">
      <div className="SearchGifInputField ">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            requestGifs();
          }}
        >
          <div>
            <span>
              <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="Search gif's"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </span>
          </div>
        </form>

        <ImageList sx={{ width: 250, height: 150 }} cols={2} rowHeight={164}>
          {gifs.map((gif) => (
            <ImageListItem key={gif.id}>
              <img
                src={gif.images.fixed_width.url}
                alt={gif.title}
                loading="lazy"
                onClick={onSelectGif}
                type="images"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </div>
    </>
  );
}

export default PopUpInputfield;
