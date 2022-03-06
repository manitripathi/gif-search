import React from "react";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";

function TogglePostButton() {

  return (
    <div>
      <ToggleButtonGroup>
        <ToggleButton value="post" className="ToggleButton">
          <i className="fi fi-rr-pencil"></i>
          <span>Compose Post</span>
        </ToggleButton>
        <ToggleButton value="album" className="ToggleButton">
          <i className="fi fi-rr-film"></i>
          <span>Photo/Video Album</span>
        </ToggleButton>
        <ToggleButton value="Video" className="ToggleButton">
          <i className="fi fi-rr-play-alt"></i>
          <span>Live Video</span>
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}

export default TogglePostButton;
