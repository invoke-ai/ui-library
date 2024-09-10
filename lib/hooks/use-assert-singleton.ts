import { useEffect } from 'react';

const IDS = new Set<string | symbol>();

/**
 * Asserts that there is only one instance of a singleton entity. It can be a hook or a component.
 * @param id The unique ID of the singleton entity.
 */
export function useAssertSingleton(id: string | symbol) {
  useEffect(() => {
    if (IDS.has(id)) {
      throw new Error(`There should be only one instance of ${String(id)}`);
    }

    IDS.add(id);

    return () => {
      IDS.delete(id);
    };
  }, [id]);
}
