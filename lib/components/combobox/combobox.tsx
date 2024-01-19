import type {
  ChakraStylesConfig,
  GroupBase,
  Props as ChakraReactSelectProps,
  SelectComponentsConfig,
  SelectInstance,
  SingleValue,
  StylesConfig,
} from 'chakra-react-select';
import { Select as ChakraReactSelect } from 'chakra-react-select';
import { memo, useEffect, useMemo } from 'react';
export type {} from 'react-select/base';

import type { ChakraProps } from '../../types/chakra-types';
import { CustomMenuListComponent } from './custom-menu-list';
import type { ComboboxOption } from './custom-option';
import { CustomOptionComponent } from './custom-option';

export type ComboboxOnChange = (v: SingleValue<ComboboxOption> | null) => void;

export type ComboboxProps = ChakraReactSelectProps<ComboboxOption, false, GroupBase<ComboboxOption>> & {
  sx?: ChakraProps['sx'];
  selectRef?: React.RefObject<SelectInstance<ComboboxOption, false, GroupBase<ComboboxOption>>>;
  inputRef?: React.MutableRefObject<HTMLInputElement | null>;
};

type CustomChakraStylesConfig = ChakraStylesConfig<ComboboxOption, false, GroupBase<ComboboxOption>>;
const styles: StylesConfig<ComboboxOption> = {
  menuPortal: (provided) => ({ ...provided, zIndex: 9999 }),
};

const components: SelectComponentsConfig<ComboboxOption, false, GroupBase<ComboboxOption>> = {
  Option: CustomOptionComponent,
  MenuList: CustomMenuListComponent,
};

export const Combobox = memo((props: ComboboxProps) => {
  const { sx, selectRef, inputRef, ...rest } = props;
  const chakraStyles = useMemo<CustomChakraStylesConfig>(
    () => ({
      container: (provided, _state) => ({ ...provided, w: 'full', ...sx }),
      option: (provided, _state) => ({ ...provided, p: 0 }),
      indicatorsContainer: (provided, _state) => ({
        ...provided,
        w: 8,
        alignItems: 'center',
        justifyContent: 'center',
        '> div': { p: 0, w: 'full', h: 'full', bg: 'unset' },
      }),
      dropdownIndicator: (provided, _state) => ({
        ...provided,
        display: _state.hasValue && _state.selectProps.isClearable ? 'none' : 'flex',
      }),
      crossIcon: (provided, _state) => ({ ...provided, boxSize: 2.5 }),
      inputContainer: (provided, _state) => ({
        ...provided,
        cursor: 'pointer',
      }),
    }),
    [sx]
  );

  useEffect(() => {
    if (!inputRef) {
      return;
    }
    inputRef.current = selectRef?.current?.inputRef ?? null;
  }, [inputRef, selectRef]);

  return (
    <ChakraReactSelect<ComboboxOption, false, GroupBase<ComboboxOption>>
      ref={selectRef}
      menuPortalTarget={document.body}
      colorScheme="base"
      selectedOptionColorScheme="base"
      components={components}
      chakraStyles={chakraStyles}
      styles={styles}
      variant="filled"
      menuPosition="fixed"
      {...rest}
    />
  );
});

Combobox.displayName = 'InvSelect';
