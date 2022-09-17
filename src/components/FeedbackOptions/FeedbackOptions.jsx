import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map(key => (
      <Button key={key} name={key} type="button" onClick={onLeaveFeedback}>
        {key}
      </Button>
    ))}
  </div>
);
