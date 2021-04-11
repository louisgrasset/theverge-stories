import './TimerList.scss';
import { Timer } from '../Timer';

export const TimerList = ({ stories, setStoryCount, storyCount }) => {
    return (
        <div className="timer-list">
            {
                stories.map((s, key) => (
                    <Timer key={key} setStoryCount={setStoryCount} storyCount={storyCount} k={key} />
                ))
            }
        </div>
    );
};
