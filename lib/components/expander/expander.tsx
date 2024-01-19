import { Divider, Flex } from '@chakra-ui/layout';
import type { SystemStyleObject } from '@chakra-ui/react';
import { Collapse, Icon } from '@chakra-ui/react';
import { memo, type PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { BiCollapseVertical, BiExpandVertical } from 'react-icons/bi';

import { Text } from '../text';

export type ExpanderProps = PropsWithChildren<{
  label?: string;
  isOpen: boolean;
  onToggle: () => void;
}>;

const buttonStyles: SystemStyleObject = {
  color: 'base.400',
  borderColor: 'base.400',
  transitionDuration: 'normal',
  transitionProperty: 'common',
  ':hover, :hover *': {
    transitionDuration: 'normal',
    transitionProperty: 'common',
    color: 'base.300',
    borderColor: 'base.300',
  },
};

export const Expander = memo((props: ExpanderProps) => {
  const { t } = useTranslation();
  const { children, label = t('common.advancedOptions', 'Advanced Options'), isOpen, onToggle } = props;

  return (
    <Flex flexDir="column" w="full">
      <Flex as="button" flexDir="row" alignItems="center" gap={3} py={4} px={2} onClick={onToggle} sx={buttonStyles}>
        <Divider w="unset" flexGrow={1} sx={buttonStyles} />
        <Flex flexDir="row" alignItems="center" gap={2}>
          <Icon as={isOpen ? BiCollapseVertical : BiExpandVertical} fontSize="14px" sx={buttonStyles} />
          <Text variant="subtext" fontSize="sm" fontWeight="semibold" flexShrink={0} sx={buttonStyles}>
            {label}
          </Text>
        </Flex>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        {children}
      </Collapse>
    </Flex>
  );
});

Expander.displayName = 'Expander';
