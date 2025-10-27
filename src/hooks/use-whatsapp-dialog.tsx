import { create } from 'zustand';

interface WhatsAppDialogStore {
  isOpen: boolean;
  openDialog: () => void;
  closeDialog: () => void;
}

export const useWhatsAppDialog = create<WhatsAppDialogStore>((set) => ({
  isOpen: false,
  openDialog: () => set({ isOpen: true }),
  closeDialog: () => set({ isOpen: false }),
}));
