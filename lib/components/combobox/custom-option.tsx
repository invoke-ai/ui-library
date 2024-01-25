import type { GroupBase, OptionBase, OptionProps } from 'chakra-react-select';
import { chakraComponents } from 'chakra-react-select';
import type { ReactNode } from 'react';

import { Flex, Text } from '../../chakra-re-exports';
import { typedMemo } from '../../util';
import { Tooltip } from '../tooltip';
export type {} from 'react-select/base';

export interface ComboboxOption extends OptionBase {
  label: string;
  value: string;
  description?: string;
  icon?: ReactNode;
  tooltip?: string;
  tags?: string[];
}

type CustomOptionProps = OptionProps<ComboboxOption, false, GroupBase<ComboboxOption>>;

export const CustomOptionComponent = typedMemo(({ children, ...props }: CustomOptionProps) => {
  // On large lists, perf really takes a hit :/
  // This improves it drastically and doesn't seem to break anything...
  delete props.innerProps.onMouseMove;
  delete props.innerProps.onMouseOver;

  if (props.data.icon) {
    return (
      <chakraComponents.Option {...props}>
        <Tooltip label={props.data.tooltip}>
          <Flex w="full" h="full" p={1} ps={2} pe={2}>
            <Flex ps={1} pe={3} alignItems="center" justifyContent="center">
              {props.data.icon}
            </Flex>
            <Flex flexDir="column">
              <Text>{children}</Text>
              {props.data.description && (
                <Text data-option-desc fontSize="sm" colorScheme="base" variant="subtext" noOfLines={1}>
                  {props.data.description}
                </Text>
              )}
            </Flex>
          </Flex>
        </Tooltip>
      </chakraComponents.Option>
    );
  }

  return (
    <chakraComponents.Option {...props}>
      <Tooltip label={props.data.tooltip}>
        <Flex w="full" h="full" flexDir="column" p={1} px={4}>
          <Text>{children}</Text>
          {props.data.description && (
            <Text data-option-desc fontSize="sm" colorScheme="base" variant="subtext" noOfLines={1}>
              {props.data.description}
            </Text>
          )}
        </Flex>
      </Tooltip>
    </chakraComponents.Option>
  );
});

CustomOptionComponent.displayName = 'CustomOptionComponent';
