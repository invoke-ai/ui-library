import { useStore } from '@nanostores/react';
import { atom } from 'nanostores';
import { useEffect } from 'react';

export const $shift = atom(false);
export const $ctrl = atom(false);
export const $meta = atom(false);
export const $alt = atom(false);

const $isInitialized = atom(0);

const listener = (e: KeyboardEvent) => {
  $shift.set(e.shiftKey);
  $ctrl.set(e.ctrlKey);
  $alt.set(e.altKey);
  $meta.set(e.metaKey);
};

/**
 * Initializes the global modifiers state. This hook is a singleton.
 */
export const useGlobalModifiersInit = () => {
  useEffect(() => {
    if ($isInitialized.get()) {
      return;
    }

    window.addEventListener('keydown', listener);
    window.addEventListener('keyup', listener);

    return () => {
      window.removeEventListener('keydown', listener);
      window.removeEventListener('keyup', listener);
    };
  }, []);
};

const setShift = (shift: boolean) => {
  $shift.set(shift);
};
const setCtrl = (ctrl: boolean) => {
  $ctrl.set(ctrl);
};
const setAlt = (alt: boolean) => {
  $alt.set(alt);
};
const setMeta = (meta: boolean) => {
  $meta.set(meta);
};

/**
 * Provides a set of setters for the global modifiers state.
 *
 * Due to event capturing in certain input elements, you may need to use these setters to manually set the state.
 */
export const useGlobalModifiersImperativeAPI = () => {
  return { setShift, setCtrl, setAlt, setMeta };
};

export const useShiftModifier = () => {
  const shift = useStore($shift);
  return shift;
};

export const useCtrlModifier = () => {
  const ctrl = useStore($ctrl);
  return ctrl;
};

export const useAltModifier = () => {
  const alt = useStore($alt);
  return alt;
};

export const useMetaModifier = () => {
  const meta = useStore($meta);
  return meta;
};
