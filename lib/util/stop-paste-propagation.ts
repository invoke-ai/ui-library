import type { ClipboardEvent } from 'react';

/**
 * Stops the propagation of a clipboard event. Useful for preventing triggering an uploader element that catches pastes.
 */
export const stopPastePropagation = (e: ClipboardEvent) => {
  e.stopPropagation();
};
