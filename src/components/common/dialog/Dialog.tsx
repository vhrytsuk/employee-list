import React from "react";
import * as Dialog from "@radix-ui/react-dialog";

interface ConfirmDeleteDialogProps {
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
  title: string;
  description?: string;
  children?: React.ReactNode;
}

const ConfirmDeleteDialog: React.FC<ConfirmDeleteDialogProps> = ({
  isModalOpen,
  setIsModalOpen,
  title,
  description,
  children,
}) => {
  return (
    <Dialog.Root open={isModalOpen} onOpenChange={setIsModalOpen}>
      <Dialog.Overlay className='fixed inset-0 bg-black bg-opacity-30' />
      <Dialog.Content className='fixed bg-white p-6 rounded-md shadow-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <Dialog.Title className='text-lg font-bold'>{title}</Dialog.Title>
        {description && (
          <Dialog.Description className='mt-2 mb-6 text-gray-600'>
            {description}
          </Dialog.Description>
        )}
        {children ?? null}
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default ConfirmDeleteDialog;
