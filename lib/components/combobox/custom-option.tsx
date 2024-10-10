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
  previewImage?: string;
  withPreviewImage?: boolean;
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
        <Flex w="full" h="full" flexDir="row" p={1} px={4}>
          <Flex pe={2}>
            {props.data.withPreviewImage && props.data.previewImage && (
              <img src={props.data.previewImage} alt={props.data.label} style={{ height: 25, width: 25 }} />
            )}
            {props.data.withPreviewImage && !props.data.previewImage && (
              <img src="/assets/images/invoke-symbol-wht-lrg.svg" alt={props.data.label} style={{ height: 25, width: 25, color: '#fff', opacity: 0.10 }} />
            )}
          </Flex>
		  <Flex ps={1}>
          	<Text lineHeight={(props.data.withPreviewImage)?'25px':'initial'}>{children}</Text>
		  </Flex>
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
