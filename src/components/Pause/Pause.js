import './Pause.scss';

export const Pause = ({ setPlay }) => {
    return (
        <div onClick={() => setPlay(true)} className={'pause'}>
            <button className="pause__button">
                <svg className="pause__button-icon" fill="#fff" width="100pt" height="100pt" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <path d="m6.6992 0 86.602 50-86.602 50z" fillRule="evenodd" />
                </svg>
            </button>
        </div>
    );
};
