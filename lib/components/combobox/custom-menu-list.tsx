import type { GroupBase, MenuListProps } from 'chakra-react-select';
import { chakraComponents } from 'chakra-react-select';
import { cloneDeep, merge } from 'es-toolkit/compat';
import type { UseOverlayScrollbarsParams } from 'overlayscrollbars-react';
import { useOverlayScrollbars } from 'overlayscrollbars-react';
import type { PropsWithChildren } from 'react';
import { useEffect, useRef, useState } from 'react';

import { Box } from '../../chakra-re-exports';
import { typedMemo } from '../../util';
import { overlayScrollbarsParams } from '../shared/overlayscrollbars';
import type { ComboboxOption } from './custom-option';

type CustomMenuListProps = MenuListProps<ComboboxOption, false, GroupBase<ComboboxOption>>;

const overlayScrollbarsParamsOverrides: Partial<UseOverlayScrollbarsParams> = {
  options: { scrollbars: { autoHide: 'never' } },
};

const osParams = merge(cloneDeep(overlayScrollbarsParams), overlayScrollbarsParamsOverrides);

const Scrollable = typedMemo((props: PropsWithChildren<{ viewport: HTMLDivElement | null }>) => {
  const { children, viewport } = props;

  const targetRef = useRef<HTMLDivElement>(null);
  const [initialize, getInstance] = useOverlayScrollbars(osParams);

  useEffect(() => {
    if (targetRef.current && viewport) {
      initialize({
        target: targetRef.current,
        elements: {
          viewport,
        },
      });
    }
    return () => getInstance()?.destroy();
  }, [viewport, initialize, getInstance]);

  return (
    <Box ref={targetRef} data-overlayscrollbars="" border="none" shadow="dark-lg" borderRadius="md" p={1}>
      {children}
    </Box>
  );
});

Scrollable.displayName = 'Scrollable';

export const CustomMenuListComponent = typedMemo(({ children, innerRef, ...other }: CustomMenuListProps) => {
  const [viewport, setViewport] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!innerRef || !(innerRef instanceof Function)) {
      return;
    }
    innerRef(viewport);
  }, [innerRef, viewport]);

  return (
    <Scrollable viewport={viewport}>
      <chakraComponents.MenuList {...other} innerRef={setViewport}>
        {children}
      </chakraComponents.MenuList>
    </Scrollable>
  );
});

CustomMenuListComponent.displayName = 'CustomMenuListComponent';
