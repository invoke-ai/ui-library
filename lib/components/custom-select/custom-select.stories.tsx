import type { Meta, StoryObj } from '@storybook/react';
import { useCallback, useState } from 'react';

import { FormControl, FormLabel } from '..';
import type { Item } from './custom-select';
import { CustomSelect } from './custom-select';

const meta: Meta<typeof CustomSelect> = {
  title: 'Primitives/CustomSelect',
  tags: ['autodocs'],
  component: CustomSelect,
};

export default meta;
type Story = StoryObj<typeof CustomSelect>;

const dessertItems: Item[] = [
  {
    group: 'SE Asian Countries',
    value: 'thailand',
    label: 'Thailand',
  },
  {
    group: 'SE Asian Countries',
    value: 'vietnam',
    label: 'Vietnam',
  },
  {
    group: 'SE Asian Countries',
    value: 'malaysai',
    label: 'Malaysia',
  },
  {
    group: 'Desserts',
    value: 'chocolate',
    label: 'Chocolate',
    description:
      'Chocolate is a usually sweet, brown food preparation of roasted and ground cacao seeds. It is made in the form of a liquid, paste, or in a block, or used as a flavoring ingredient in other foods.',
  },
  {
    group: 'Desserts',
    value: 'strawberry',
    label: 'Strawberry',
    description:
      'Strawberries are bright red fruits with a sweet yet slightly tart taste. They are often enjoyed fresh but are also used in a variety of desserts and sauces.',
    isDisabled: true,
  },
  {
    group: 'Desserts',
    value: 'vanilla',
    label: 'Vanilla',
    description:
      'Vanilla is a popular flavor derived from orchids of the genus Vanilla. It is used in a variety of desserts and beverages for its sweet and creamy flavor.',
  },
  {
    value: 'other1',
    label: 'Some Other Value',
    description: 'This is a description of some other value',
  },
  {
    value: 'other2',
    label: 'Another Value',
  },
  {
    value: 'other3',
    label: 'Something else entirely',
  },
];

for (let i = 0; i < 100; i++) {
  dessertItems.push({
    value: `item-${i}`,
    label: `Item ${i}`,
  });
}

const Component = () => {
  const [selectedItem, setSelectedItem] = useState<Item | null>(dessertItems[0] ?? null);

  const onChange = useCallback((selectedItem: Item | null) => {
    setSelectedItem(selectedItem);
  }, []);

  return (
    <FormControl w="20rem" orientation="vertical">
      <FormLabel>Framework</FormLabel>
      <CustomSelect
        items={dessertItems}
        selectedItem={selectedItem}
        onChange={onChange}
        descNoOfLines={3}
        isClearable
      />
    </FormControl>
  );
};

export const Default: Story = {
  render: Component,
};
