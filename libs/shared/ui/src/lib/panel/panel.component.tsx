import * as Styled from './panel.styled';

export type PanelProps = React.ComponentPropsWithoutRef<'section'>;

export function Panel(props: PanelProps) {
  return <Styled.RootSection {...props} />;
}

Panel.Title = Styled.Title;

export default Panel;
