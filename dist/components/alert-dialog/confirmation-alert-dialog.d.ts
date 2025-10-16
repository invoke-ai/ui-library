import { PropsWithChildren } from 'react';
import { AlertDialogProps } from './wrapper';
export type ConfirmationAlertDialogProps = Omit<AlertDialogProps, 'leastDestructiveRef' | 'isOpen' | 'onClose'> & PropsWithChildren<{
    isOpen: boolean;
    onClose: () => void;
    acceptButtonText?: string;
    acceptCallback: () => void;
    cancelButtonText?: string;
    cancelCallback?: () => void;
    title: string;
}>;
/**
 * This component is a wrapper around AlertDialog that provides a confirmation dialog.
 * Its state must be managed externally using chakra's `useDisclosure()` hook.
 */
export declare const ConfirmationAlertDialog: ((props: ConfirmationAlertDialogProps) => import("react/jsx-runtime").JSX.Element) & {
    displayName?: string;
};
