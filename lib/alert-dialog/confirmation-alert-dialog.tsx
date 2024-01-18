import type { PropsWithChildren } from 'react';
import { memo, useCallback, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '../button';
import type { AlertDialogProps } from './wrapper';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
} from './wrapper';

export type ConfirmationAlertDialogProps = Omit<AlertDialogProps, 'leastDestructiveRef' | 'isOpen' | 'onClose'> &
  PropsWithChildren<{
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
export const ConfirmationAlertDialog = memo((props: ConfirmationAlertDialogProps) => {
  const { t } = useTranslation();

  const {
    acceptCallback,
    cancelCallback,
    acceptButtonText = t('common.accept', 'Accept'),
    cancelButtonText = t('common.cancel', 'Cancel'),
    children,
    title,
    isOpen,
    onClose,
  } = props;

  const cancelRef = useRef<HTMLButtonElement | null>(null);

  const handleAccept = useCallback(() => {
    acceptCallback();
    onClose();
  }, [acceptCallback, onClose]);

  const handleCancel = useCallback(() => {
    cancelCallback && cancelCallback();
    onClose();
  }, [cancelCallback, onClose]);

  return (
    <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose} isCentered>
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            {title}
          </AlertDialogHeader>

          <AlertDialogBody>{children}</AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={handleCancel}>
              {cancelButtonText}
            </Button>
            <Button colorScheme="error" onClick={handleAccept} ml={3}>
              {acceptButtonText}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
});

ConfirmationAlertDialog.displayName = 'ConfirmationAlertDialog';
