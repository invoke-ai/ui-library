import type { SelectProps as ArkSelectProps } from '@ark-ui/react';
import { Portal, Select } from '@ark-ui/react';
import { Divider, Icon, useFormControl, useMultiStyleConfig } from '@chakra-ui/react';
import { Fragment, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { PiArrowCounterClockwiseBold, PiCaretDownBold } from 'react-icons/pi';

import { Flex, Text } from '../../chakra-re-exports';
import { IconButton, Tooltip } from '..';

const isItemDisabledDefault: ArkSelectProps<Item>['isItemDisabled'] = (item: Item) =>
  item.isDisabled === undefined ? false : item.isDisabled;
const itemToStringDefault: ArkSelectProps<Item>['itemToString'] = (item: Item) => item.label;
const itemToValueDefault: ArkSelectProps<Item>['itemToValue'] = (item: Item) => item.value;
const positioningDefault: ArkSelectProps<Item>['positioning'] = { sameWidth: true, gutter: 4 };
const groupSortFuncDefault = (a: ItemGroup, b: ItemGroup) => {
  if (!a.group) {
    return -1;
  }
  if (!b.group) {
    return 1;
  }
  return a.group.localeCompare(b.group);
};

export type Item = {
  label: string;
  value: string;
  description?: string;
  group?: string;
  isDisabled?: boolean;
};

export type ItemGroup = {
  group?: string;
  items: Item[];
};

// This is not exported from ark, we need to define it ourselves.
type SelectValueChangeDetails = {
  value: string[];
  items: Item[];
};

export type CustomSelectProps = Omit<
  ArkSelectProps<Item>,
  'id' | 'value' | 'items' | 'asChild' | 'onValueChange' | 'onChange'
> & {
  items: Item[];
  selectedItem: Item | null;
  isClearable?: boolean;
  placeholder?: string;
  onChange: (selectedItem: Item | null) => void;
  groupSortFunc?: (a: ItemGroup, b: ItemGroup) => number;
};

const groupedItemsReducer = (acc: ItemGroup[], val: Item, _idx: number, _arr: Item[]) => {
  const existingGroup = acc.find((group) => group.group === val.group);
  if (existingGroup) {
    existingGroup.items.push(val);
  } else {
    const newItemGroup: ItemGroup = { items: [val] };
    if (val.group) {
      newItemGroup.group = val.group;
    }
    acc.push(newItemGroup);
  }
  return acc;
};

export const CustomSelect = (props: CustomSelectProps) => {
  const {
    items,
    selectedItem,
    onChange,
    isItemDisabled = isItemDisabledDefault,
    itemToString = itemToStringDefault,
    itemToValue = itemToValueDefault,
    isClearable = false,
    placeholder: _placeholder,
    positioning = positioningDefault,
    groupSortFunc = groupSortFuncDefault,
    invalid,
    disabled,
    ...rest
  } = props;
  const { t } = useTranslation();

  const value = useMemo(() => (selectedItem ? [selectedItem.value] : []), [selectedItem]);

  const groupedItems = useMemo<ItemGroup[]>(() => {
    const _groupedItems = items.reduce<ItemGroup[]>(groupedItemsReducer, []);
    _groupedItems.sort(groupSortFunc);
    return _groupedItems;
  }, [groupSortFunc, items]);

  const onValueChange = useCallback(
    (e: SelectValueChangeDetails) => {
      onChange(e.items[0] ?? null);
    },
    [onChange]
  );

  const onClickClear = useCallback(() => {
    onChange(null);
  }, [onChange]);

  const placeholder = useMemo(() => _placeholder ?? t('common.selectAnItem', 'Select an Item'), [_placeholder, t]);

  const styles = useMultiStyleConfig('CustomSelect');
  const inputProps = useFormControl({
    isDisabled: disabled,
    isInvalid: invalid,
  });

  return (
    <Tooltip label={selectedItem?.description} placement="top" openDelay={500}>
      <Select.Root
        value={value}
        items={items}
        onValueChange={onValueChange}
        isItemDisabled={isItemDisabled}
        itemToString={itemToString}
        itemToValue={itemToValue}
        positioning={positioning}
        disabled={inputProps.disabled}
        invalid={inputProps['aria-invalid']}
        {...rest}
        asChild
      >
        <Flex data-part="root" __css={styles.root}>
          <Select.Control asChild>
            <Flex>
              <Select.Trigger asChild>
                <Flex as="button">
                  <Select.ValueText asChild>
                    <Flex>{selectedItem?.label ?? placeholder}</Flex>
                  </Select.ValueText>
                  <Select.Indicator>
                    <Icon as={PiCaretDownBold} />
                  </Select.Indicator>
                </Flex>
              </Select.Trigger>
              {isClearable && (
                <IconButton
                  aria-label="Clear selection"
                  variant="ghost"
                  size="sm"
                  icon={<PiArrowCounterClockwiseBold />}
                  isDisabled={!selectedItem || inputProps.disabled}
                  onClick={onClickClear}
                />
              )}
            </Flex>
          </Select.Control>
          <Portal>
            <Select.Positioner>
              <Select.Content asChild>
                <Flex __css={styles.content}>
                  {groupedItems.map((itemGroup, i) => (
                    <Fragment key={`${itemGroup.group}_${i}`}>
                      <ItemGroupComponent itemGroup={itemGroup} />
                      {/* {i < groupedItems.length - 1 && <Divider pt={1} />} */}
                    </Fragment>
                  ))}
                </Flex>
              </Select.Content>
            </Select.Positioner>
          </Portal>
        </Flex>
      </Select.Root>
    </Tooltip>
  );
};

type ItemGroupComponentProps = {
  itemGroup: ItemGroup;
};

const ItemGroupComponent = ({ itemGroup }: ItemGroupComponentProps) => {
  if (!itemGroup.group) {
    return (
      <>
        {itemGroup.items.map((item) => (
          <SelectItem key={item.value} item={item} />
        ))}
      </>
    );
  }

  return (
    <Select.ItemGroup id={itemGroup.group} asChild>
      <Flex>
        {itemGroup.group && (
          <Select.ItemGroupLabel htmlFor={itemGroup.group} asChild>
            <Flex alignItems="center" gap={2} userSelect="none">
              <Text flexShrink={0}>{itemGroup.group}</Text>
              <Divider />
            </Flex>
          </Select.ItemGroupLabel>
        )}
        {itemGroup.items.map((item) => (
          <SelectItem key={item.value} item={item} />
        ))}
      </Flex>
    </Select.ItemGroup>
  );
};

type SelectItemProps = {
  item: Item;
};

const SelectItem = ({ item }: SelectItemProps) => {
  return (
    <Select.Item item={item} asChild>
      <Flex>
        <Select.ItemText asChild>
          <Flex>
            <Text data-part="item-text-label">{item.label}</Text>
            {item?.description && (
              <Text data-part="item-text-description" noOfLines={1}>
                {item?.description}
              </Text>
            )}
          </Flex>
        </Select.ItemText>
      </Flex>
    </Select.Item>
  );
};
