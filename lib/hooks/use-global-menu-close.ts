import { atom } from 'nanostores';
import { useCallback, useEffect } from 'react';

type CB = () => void;

const $onCloseCallbacks = atom<CB[]>([]);

/**
 * Hook to register a callback to be called when the global menu close event is triggered.
 *
 * Useful for when a component interferes with the DOM events that normally trigger the menu close event.
 *
 * `reactflow`'s renderer component is an example of this.
 *
 * @param onClose A callback that will be called when the global menu close event is triggered. Typically, this is the `onClose` handler for the menu.
 * @returns An object with a `onCloseGlobal` callback that can be used to trigger the global menu close event.
 */
export const useGlobalMenuClose = (onClose?: CB) => {
  useEffect(() => {
    if (!onClose) {
      return;
    }
    $onCloseCallbacks.set([...$onCloseCallbacks.get(), onClose]);
    return () => {
      $onCloseCallbacks.set($onCloseCallbacks.get().filter((c) => c !== onClose));
    };
  }, [onClose]);

  const onCloseGlobal = useCallback(() => {
    $onCloseCallbacks.get().forEach((cb) => cb());
  }, []);

  return { onCloseGlobal };
};
