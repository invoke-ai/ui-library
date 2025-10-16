/**
 * A `nanostores` atom that represents the current state of the shift key.
 * If true, the shift key is currently pressed.
 */
export declare const $shift: import('nanostores').PreinitializedWritableAtom<boolean> & object;
/**
 * A `nanostores` atom that represents the current state of the ctrl key.
 * If true, the ctrl key is currently pressed.
 */
export declare const $ctrl: import('nanostores').PreinitializedWritableAtom<boolean> & object;
/**
 * A `nanostores` atom that represents the current state of the meta key.
 * If true, the meta key is currently pressed.
 */
export declare const $meta: import('nanostores').PreinitializedWritableAtom<boolean> & object;
/**
 * A `nanostores` atom that represents the current state of the alt key.
 * If true, the alt key is currently pressed.
 */
export declare const $alt: import('nanostores').PreinitializedWritableAtom<boolean> & object;
/**
 * Initializes the global modifiers state. This hook is a singleton.
 */
export declare const useGlobalModifiersInit: () => void;
/**
 * Provides a set of setters for the global modifiers state.
 *
 * Due to event capturing in certain input elements, you may need to use these setters to manually set the state.
 */
export declare const useGlobalModifiersImperativeAPI: () => {
    setShift: (shift: boolean) => void;
    setCtrl: (ctrl: boolean) => void;
    setAlt: (alt: boolean) => void;
    setMeta: (meta: boolean) => void;
};
/**
 * Provides the current state of the global shift modifier.
 * @returns true if the shift key is currently pressed.
 */
export declare const useShiftModifier: () => boolean;
/**
 * Provides the current state of the global ctrl modifier.
 * @returns true if the ctrl key is currently pressed.
 */
export declare const useCtrlModifier: () => boolean;
/**
 * Provides the current state of the global alt modifier.
 * @returns true if the alt key is currently pressed.
 */
export declare const useAltModifier: () => boolean;
/**
 * Provides the current state of the global meta modifier.
 * @returns true if the meta key is currently pressed.
 */
export declare const useMetaModifier: () => boolean;
