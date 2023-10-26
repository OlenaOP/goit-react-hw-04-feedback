import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.buttonWrap}>
      {options.map(option => {
        return (
          <button
            className={css.btn}
            onClick={onLeaveFeedback}
            key={option}
            name={option}
            type="button"
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};
