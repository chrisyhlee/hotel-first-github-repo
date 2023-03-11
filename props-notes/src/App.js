import React, {useState} from "react";
import EpisodeList from "./components/EpisodeList";
import './App.css'
import Player from "./components/Player";

const App = () => {

  const episodes = ["Teaching TypeScript", "Stoic Coding", "Full Time Content Creation", "Democratizing Data", "Breaking into Dev Rel", "10 Common Accessibility Mistakes to Avoid"]

  const [currentEpisode, setCurrentEpisode] = useState(episodes[0])

  const triggerNextEpisode = () => {
    let nextEpisode = episodes.indexOf(currentEpisode) + 1
    console.log(nextEpisode);
    // --> 0
    setCurrentEpisode(episodes[nextEpisode])
    console.log(nextEpisode);
  }

  return (
    <>
      <h1>Compressed.fm Clone</h1>
        <div className="episode-cards">
          {episodes.map((episode) => {
            return <EpisodeList title={episode} />
          })}
        </div>
        <Player currentEpisode={currentEpisode} triggerNextEpisode={triggerNextEpisode} />
    </>
  )
}

export default App