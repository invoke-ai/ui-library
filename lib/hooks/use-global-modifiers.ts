import { useStore } from '@nanostores/react';
import { atom } from 'nanostores';
import { useEffect } from 'react';

/**
 * A `nanostores` atom that represents the current state of the shift key.
 * If true, the shift key is currently pressed.
 */
export const $shift = atom(false);
/**
 * A `nanostores` atom that represents the current state of the ctrl key.
 * If true, the ctrl key is currently pressed.
 */
export const $ctrl = atom(false);
/**
 * A `nanostores` atom that represents the current state of the meta key.
 * If true, the meta key is currently pressed.
 */
export const $meta = atom(false);
/**
 * A `nanostores` atom that represents the current state of the alt key.
 * If true, the alt key is currently pressed.
 */
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

/**
 * Sets the state of the $shift atom.
 */
const setShift = (shift: boolean) => {
  $shift.set(shift);
};
/**
 * Sets the state of the $ctrl atom.
 */
const setCtrl = (ctrl: boolean) => {
  $ctrl.set(ctrl);
};
/**
 * Sets the state of the $alt atom.
 */
const setAlt = (alt: boolean) => {
  $alt.set(alt);
};
/**
 * Sets the state of the $meta atom.
 */
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

/**
 * Provides the current state of the global shift modifier.
 * @returns true if the shift key is currently pressed.
 */
export const useShiftModifier = () => {
  const shift = useStore($shift);
  return shift;
};

/**
 * Provides the current state of the global ctrl modifier.
 * @returns true if the ctrl key is currently pressed.
 */
export const useCtrlModifier = () => {
  const ctrl = useStore($ctrl);
  return ctrl;
};

/**
 * Provides the current state of the global alt modifier.
 * @returns true if the alt key is currently pressed.
 */
export const useAltModifier = () => {
  const alt = useStore($alt);
  return alt;
};

/**
 * Provides the current state of the global meta modifier.
 * @returns true if the meta key is currently pressed.
 */
export const useMetaModifier = () => {
  const meta = useStore($meta);
  return meta;
};
