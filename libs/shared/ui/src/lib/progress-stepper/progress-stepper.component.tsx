import * as Styled from './progress-stepper.styled';

export type ProgressStepperProps = React.ComponentPropsWithoutRef<'section'>;

export function ProgressStepper(props: ProgressStepperProps) {
  return <Styled.RootSection {...props} />;
}

ProgressStepper.List = Styled.OrderedList;
ProgressStepper.ListItem = Styled.ListItem;
ProgressStepper.ListItemLink = Styled.ListItemLink;

export default ProgressStepper;
