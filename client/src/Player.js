import { useState, useEffect } from "react";
import SpotifyPlayer from "react-spotify-web-playback";

export default function Player({ accessToken, trackUri }) {
  const [play, setPlay] = useState(false);

  useEffect(() => setPlay(true), [trackUri]);

  if (!accessToken) return null;
  return (
    <SpotifyPlayer
      token={accessToken}
      showSaveIcon
      callback={(state) => {
        if (!state.isPlaying) setPlay(false);
      }}
      play={play}
      uris={trackUri ? [trackUri] : []}
      styles={{
        activeColor: "#fff",
        bgColor: "#333",
        color: "#fff",
        height: "100px",
        loaderColor: "#fff",
        sliderColor: "#8112EB",
        trackArtistColor: "#ccc",
        trackNameColor: "#fff",
      }}
    />
  );
}
