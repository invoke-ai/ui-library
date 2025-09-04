import type { Meta, StoryObj } from '@storybook/react';
import { omit } from 'es-toolkit/compat';

import type { ComboboxProps } from './combobox';
import { Combobox } from './combobox';
import type { ComboboxOption } from './custom-option';

const COMBOBOX_STORY_OPTIONS: ComboboxOption[] = [
  {
    value: 'chocolate',
    label: 'Chocolate',
    description:
      'Chocolate is a usually sweet, brown food preparation of roasted and ground cacao seeds. It is made in the form of a liquid, paste, or in a block, or used as a flavoring ingredient in other foods.',
    icon: '🍫',
  },
  {
    value: 'strawberry',
    label: 'Strawberry',
    description:
      'Strawberries are bright red fruits with a sweet yet slightly tart taste. They are often enjoyed fresh but are also used in a variety of desserts and sauces.',
    icon: '🍓',
  },
  {
    value: 'vanilla',
    label: 'Vanilla',
    description:
      'Vanilla is a popular flavor derived from orchids of the genus Vanilla. It is used in a variety of desserts and beverages for its sweet and creamy flavor.',
    icon: '🍦',
  },
  {
    value: 'orange',
    label: 'Orange',
    description:
      'Oranges are a type of low calorie, highly nutritious citrus fruit. As part of a healthful and varied diet, oranges contribute to strong, clear skin and can help lower a person’s risk of many conditions.',
    icon: '🍊',
  },
  {
    value: 'banana',
    label: 'Banana',
    description:
      'Bananas are a popular fruit that are high in key nutrients. They are a convenient snack and are a staple ingredient in many recipes.',
    icon: '🍌',
  },
  {
    value: 'apple',
    label: 'Apple',
    description:
      'Apples are a popular fruit, containing antioxidants, vitamins, dietary fiber, and a range of other nutrients. Due to their varied nutrient content, they may help prevent several health conditions.',
    icon: '🍎',
  },
  {
    value: 'grapes',
    label: 'Grapes',
    description:
      'Grapes are a good source of fiber, potassium, and a range of vitamins and other minerals. Grapes are suitable for people with diabetes, as long as they are accounted for in their meal plan.',
    icon: '🍇',
  },
  {
    value: 'watermelon',
    label: 'Watermelon',
    description:
      'Watermelon is a delicious and refreshing fruit that’s also good for you. It contains only 46 calories per cup but is high in vitamin C, vitamin A and many healthy plant compounds.',
    icon: '🍉',
  },
  {
    value: 'pear',
    label: 'Pear',
    description:
      'Pears are a sweet fruit with a number of health benefits. They are high in fiber, contain antioxidants, and are an excellent source of vitamin C.',
    icon: '🍐',
  },
  {
    value: 'peach',
    label: 'Peach',
    description:
      'Peaches are a sweet, juicy fruit that can be eaten on their own or added to a variety of dishes. They are high in vitamins A and C and fiber.',
    icon: '🍑',
  },
  {
    value: 'pineapple',
    label: 'Pineapple',
    description:
      'Pineapple is a tropical fruit available in any grocery store and a staple in many homes around the world. It’s rich in vitamins, enzymes and antioxidants.',
    icon: '🍍',
  },
  {
    value: 'mango',
    label: 'Mango',
    description:
      'Mangoes are a tropical fruit from the drupe family. They are native to India, but now grown in many tropical and subtropical regions.',
    icon: '🥭',
  },
];

const meta: Meta<typeof Combobox> = {
  title: 'Primitives/Combobox',
  tags: ['autodocs'],
  component: Combobox,
  args: {
    options: COMBOBOX_STORY_OPTIONS,
  },
  argTypes: {
    options: {
      control: {
        type: 'select',
      },
      options: ['WithIcon', 'WithDescription', 'OnlyLabel'],
      mapping: {
        WithIcon: COMBOBOX_STORY_OPTIONS,
        WithDescription: COMBOBOX_STORY_OPTIONS.map((o) => omit(o, 'icon')),
        OnlyLabel: COMBOBOX_STORY_OPTIONS.map((o) => omit(o, ['icon', 'description'])),
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Combobox>;

const Component = (props: ComboboxProps) => {
  return <Combobox {...props} defaultValue={COMBOBOX_STORY_OPTIONS[0]} />;
};

export const Default: Story = {
  render: Component,
};
