import './Poster.scss';

export const Poster = ({ url, togglePlay }) => {
    return (
        <div className={'poster' + ' poster--animate'} onClick={togglePlay}>
            <div className={'poster__background'} style={{ backgroundImage: `url(${url})` }}></div>
        </div>
    );
};
