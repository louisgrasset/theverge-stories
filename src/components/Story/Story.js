import './Story.scss';

import { Poster } from '../Poster';
import { Headline } from '../Headline';

import iconArrow from '../../images/arrow.svg';

export const Story = ({ index, story, storyCount, nextStory, togglePlay, play }) => {

    const style = {
        transform: `translate(${(storyCount - index) * -100}%)`
    };

    return (
        <div className={'story' +
            (storyCount === index ? ' story--active' : '') +
            (storyCount > index ? ' story--shown' : '') +
            (play ? '' : ' story--pause')}>
            <div className="story-container">
                <Headline title={story.title} />
                <Poster url={story.poster} togglePlay={togglePlay} />
                <button className="story__button story__button--next" onClick={nextStory} >
                    <img alt="arrow" className="story__button--next-icon" src={iconArrow} />
                </button>
            </div>
        </div >
    );
};;
