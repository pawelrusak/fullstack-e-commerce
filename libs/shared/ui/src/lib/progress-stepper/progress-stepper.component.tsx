import * as Styled from './progress-stepper.styled';

export type ProgressStepperProps = React.ComponentPropsWithoutRef<'section'>;

export function ProgressStepper(props: ProgressStepperProps) {
  return <Styled.SectionWrapper {...props} />;
}

ProgressStepper.List = Styled.OrderedList;
ProgressStepper.ListItem = Styled.ListItem;
ProgressStepper.ListItemLink = Styled.Link;

export default ProgressStepper;
