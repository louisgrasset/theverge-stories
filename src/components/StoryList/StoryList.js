import './StoryList.scss';

import { Story } from '../Story';

export const StoryList = ({ stories, storyCount, nextStory, togglePlay, play }) => {
    return (
        <div className="story-list">
            {
                stories.map((s, k) => (
                    <Story key={k} index={k} story={s} storyCount={storyCount} nextStory={nextStory} togglePlay={togglePlay} play={play} />
                ))
            }
        </div>
    );
};