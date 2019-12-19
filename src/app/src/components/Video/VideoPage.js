import React, { useEffect } from "react";
import { VideoPageContainer } from "./videoStyles";
import { useCurrentEvent } from "../../redux/hooks/queries/useCurrentEvent";
import { useHistory } from "react-router-dom";

export default function VideoPage() {
  const currentEvent = useCurrentEvent();
  const source = currentEvent.presentation[0].video_url;
  return (
    <VideoPageContainer>
      <iframe
        title="video"
        width="100%"
        height="100%"
        src={source ? source : null}
        frameBorder="0"
      ></iframe>
    </VideoPageContainer>
  );
}
