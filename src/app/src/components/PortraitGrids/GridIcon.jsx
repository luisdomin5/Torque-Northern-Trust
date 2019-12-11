import React from "react";
import { GridItem, GridIconOverlay } from "./styles/GridStyle";

export default function GridIcon({ icon, onClick, index }) {
  let background_color;

  switch (icon.background_color) {
    case "turquoise":
      background_color = `rgba(64, 224, 208, 0.5)`;
      break;
    case "green":
      background_color = `rgba(0, 255, 0, 0.5)`;
      break;
    case "orange":
      background_color = `rgba(255, 165, 0, 0.5)`;
      break;
    case "blue":
      background_color = `rgba(0, 0, 255, 0.5)`;
      break;
    case "gold":
      background_color = `rgba(212, 175, 55, 0.5)`;
      break;
    default:
      background_color = `rgba(0, 255, 0)`;
  }

  return (
    <GridItem
      style={{ backgroundImage: `url(${icon.icon.url})` }}
      onClick={() => onClick(index)}
    >
      <GridIconOverlay
        style={{
          backgroundColor: background_color
        }}
      >
        <img src="" alt="" />
        <h1>{icon.title}</h1>
      </GridIconOverlay>
    </GridItem>
  );
}
