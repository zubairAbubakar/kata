import { create } from 'zustand';

interface SigininModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useSigininModal = create<SigininModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));

export default useSigininModal;
