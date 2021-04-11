import './Headline.scss';

export const Headline = ({ title }) => {
    return (
        <div className="headline">
            <div className="headline__wrapper">
                <h2>{title}</h2>
            </div>
        </div>
    );
};
