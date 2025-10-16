import { ClipboardEvent } from 'react';
/**
 * Stops the propagation of a clipboard event. Useful for preventing triggering an uploader element that catches pastes.
 */
export declare const stopPastePropagation: (e: ClipboardEvent) => void;
