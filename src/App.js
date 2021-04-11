import './App.scss';
import { useCallback, useEffect, useState } from 'react';

import { TimerList } from './components/TimerList';
import { StoryList } from './components/StoryList';
import { Pause } from './components/Pause';

import iconLogo from './images/theverge.svg';
import iconMenu from './images/three-dots.svg';
import iconPlay from './images/play.svg';
import iconPause from './images/pause.svg';

import { stories as defaultStories } from './data/stories';

const App = () => {
  // Creating states
  const [stories, setStories] = useState(defaultStories);
  const [storyCount, setStoryCount] = useState(-1);
  const [play, setPlay] = useState(true);
  const [width, setWidth] = useState('600');

  /**
   * Preloading all images from the start
   */
  useEffect(() => {
    stories.forEach(s => new Image().src = s.poster);
  }, [stories]);

  const nextStory = useCallback(() => storyCount < stories.length - 1 ? setStoryCount(storyCount + 1) : setStoryCount(0), [storyCount, stories.length]);
  const togglePlay = () => setPlay(!play);

  // Switch to the next story if play is pressed back
  useEffect(() => {
    play && nextStory();
  }, [play]);

  // Switch to the next story each 3 seconds
  useEffect(() => {
    if (play) {
      const interval = setInterval(nextStory, 3000);
      return () => clearInterval(interval);
    }
  }, [nextStory, play]);

  return (
    <div className="wrapper" style={{ width: `${width}px` }}>
      <div className="app">
        <TimerList stories={stories} setStoryCount={setStoryCount} storyCount={storyCount} />
        <StoryList stories={stories} storyCount={storyCount} nextStory={nextStory} togglePlay={togglePlay} play={play} />
        {!play && <Pause setPlay={setPlay} />}

        <a className="story__logo" href="https://theverge.com" rel="noreferrer" target="_blank">
          <img alt="The Verge" className="story__logo-image" src={iconLogo} />
        </a>
        <img alt="menu" className="story__menu" src={iconMenu} />
        <button className="story__button story__button--play" onClick={togglePlay}>
          <img alt={play ? "Pause" : "Play"} className="story__button--play-icon" src={play ? iconPause : iconPlay} />
        </button>
      </div>
      <input style={{ position: 'fixed', zIndex: "4", top: '2rem', left: '2rem' }} type="number" step="15" value={width} onChange={(e) => setWidth(e.target.value)} />
    </div>
  );
};

export default App;
