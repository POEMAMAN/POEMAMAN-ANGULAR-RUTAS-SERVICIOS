import { Meta, StoryObj } from '@storybook/angular';

import { CharactersComponent } from './characters.component';

type ComponentWithCustomControls = CharactersComponent;

const meta: Meta<ComponentWithCustomControls> = {
  // title: 'Components/Characters',
  component: CharactersComponent,
  // decorators: [moduleMetadata({imports: []})],
  parameters: {
    docs: { description: { component: `Characters` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

export const Characters: StoryObj<ComponentWithCustomControls> = {
  render: (args: ComponentWithCustomControls) => ({ props: args }),
  args: {},
}
