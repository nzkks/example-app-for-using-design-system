import { Global } from '@emotion/react';
import { global as designSystemGlobal } from '@nzkks/storybook-design-system';

const { GlobalStyle } = designSystemGlobal;

/** @type { import('@storybook/react').Preview } */
const preview = {
  decorators: [
    Story => (
      <>
        <Global styles={GlobalStyle} />
        <Story />
      </>
    )
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
};

export default preview;
