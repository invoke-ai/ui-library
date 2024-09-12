import type { ThemeOverride } from '@chakra-ui/react';

import { accordionTheme } from './accordion';
import { alertTheme } from './alert';
import { badgeTheme } from './badge';
import { buttonTheme } from './button';
import { cardTheme } from './card';
import { checkboxTheme } from './checkbox';
import { customSelectTheme } from './custom-select';
import { editableTheme } from './editable';
import { formLabelTheme, formTheme } from './form';
import { headingTheme } from './heading';
import { inputTheme } from './input';
import { menuTheme } from './menu';
import { modalTheme } from './modal';
import { numberInputTheme } from './number-input';
import { popoverTheme } from './popover';
import { progressTheme } from './progress';
import { skeletonTheme } from './skeleton';
import { sliderTheme } from './slider';
import { switchTheme } from './switch';
import { tabsTheme } from './tabs';
import { textTheme } from './text';
import { textareaTheme } from './textarea';
import { tooltipTheme } from './tooltip';

export const components: ThemeOverride['components'] = {
  Accordion: accordionTheme,
  Alert: alertTheme,
  Badge: badgeTheme,
  Button: buttonTheme,
  Card: cardTheme,
  Checkbox: checkboxTheme,
  CustomSelect: customSelectTheme,
  Editable: editableTheme,
  Form: formTheme,
  FormLabel: formLabelTheme,
  Heading: headingTheme,
  Input: inputTheme,
  Menu: menuTheme,
  Modal: modalTheme,
  NumberInput: numberInputTheme,
  Popover: popoverTheme,
  Progress: progressTheme,
  Skeleton: skeletonTheme,
  Slider: sliderTheme,
  Switch: switchTheme,
  Tabs: tabsTheme,
  Text: textTheme,
  Textarea: textareaTheme,
  Tooltip: tooltipTheme,
};
