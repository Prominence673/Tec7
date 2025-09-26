import { useEffect, useState } from "react";
import YouTube from "react-youtube";
import axios from "axios";
import '../styles/radio.css'

const API_KEY = import.meta.env.VITE_API_KEY;
const CHANNEL_ID = import.meta.env.VITE_CHANNEL_ID;

export default function Radio() {
  const [streamId, setStreamId] = useState(null);
  const [videoId, setVideoId] = useState(null);
        const fetchStream = async () => {
        try {
            const liveRes = await axios.get(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&eventType=live&type=video&key=${API_KEY}`
            );

            if (liveRes.data.items && liveRes.data.items.length > 0) {
            setStreamId(liveRes.data.items[0].id.videoId);
            return; 
            }

            const completedRes = await axios.get(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&type=video&eventType=completed&order=date&maxResults=1&key=${API_KEY}`
            );

            if (completedRes.data.items && completedRes.data.items.length > 0) {
            setVideoId(completedRes.data.items[0].id.videoId);
            }
        } catch (error) {
            console.error("Error consultando YouTube API:", error);
        }
        };
    useEffect(() => {
        fetchStream();
        }, []);

  const options = {
    height: "390",
    width: "640",
    playerVars: { autoplay: 0, controls: 1 },
  };

  return (
  <>
  <div className="radio-container">
    <div className="stream-container">
      {streamId ? (<YouTube videoId={streamId} opts={options} />) : videoId ? (<YouTube videoId={videoId} opts={options} />) : 'no hay video o directo disponible'}
    </div>
  </div>
  </>
  )
}
