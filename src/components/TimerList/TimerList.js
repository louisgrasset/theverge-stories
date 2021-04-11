import './TimerList.scss';
import { Timer } from '../Timer';
import { stories } from '../../data/stories';

export const TimerList = ({ story, setStoryCount, storyCount }) => {
    return (
        <div className="timer-list" data-count={stories.length}>
            {
                stories.map((s, key) => (
                    <Timer setStoryCount={setStoryCount} storyCount={storyCount} key={key} k={key} count={story.index} />
                ))
            }
        </div>
    );
};
