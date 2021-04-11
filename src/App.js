import './App.scss';
import { useCallback, useEffect, useState } from 'react';

import { TimerList } from './components/TimerList';
import { Story } from './components/Story';

import iconLogo from './images/theverge.svg';
import iconMenu from './images/three-dots.svg';
import iconPlay from './images/play.svg';
import iconPause from './images/pause.svg';

import { stories as defaultStories } from './data/stories';

const App = () => {
  // Creating states
  const [stories, setStories] = useState(defaultStories);
  const [storyCount, setStoryCount] = useState(0);
  const [play, setPlay] = useState(true);
  const [width, setWidth] = useState('600');

  /**
   * Preloading all images from the start
   */
  useEffect(() => {
    stories.forEach(s => new Image().src = s.poster);
  }, [stories]);

  const nextStory = useCallback(() => storyCount < stories.length - 1 ? setStoryCount(storyCount + 1) : setStoryCount(0), [storyCount]);
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
        {
          stories.map((s, k) => (
            <Story key={k} index={k} story={s} storyCount={storyCount} nextStory={nextStory} togglePlay={togglePlay} play={play} />
          ))
        }

        <a href="https://theverge.com" rel="noreferrer" target="_blank">
          <img alt="The Verge" className="story__logo" src={iconLogo} />
        </a>
        <img alt="menu" className="story__menu" src={iconMenu} />
        <button className="story__button--play" onClick={togglePlay}>
          <img alt={play ? "Pause" : "Play"} className="story__button--play-icon" src={play ? iconPause : iconPlay} />
        </button>
      </div>
      <input style={{ position: 'fixed', zIndex: "4", top: '2rem', left: '2rem' }} type="number" step="15" value={width} onChange={(e) => setWidth(e.target.value)} />
    </div>
  );
};

export default App;
