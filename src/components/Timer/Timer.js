import './Timer.scss';

export const Timer = ({ k, setStoryCount, storyCount }) => {
    return (
        <div onClick={() => setStoryCount(k)} className={
            'timer' +
            (storyCount === k ? ' timer--active' : '') +
            (storyCount > k ? ' timer--shown' : '')}>
            <div className="timer__line"></div>
            <div className="timer__background"></div>
        </div>
    );
};
