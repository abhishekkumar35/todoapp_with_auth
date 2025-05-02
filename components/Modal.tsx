import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onCancel?: () => void;
    title?: string;
    children: React.ReactNode;
    isLoading?: boolean;
    isSaving?: boolean;
}

export default function Modal({
    isOpen,
    onClose,
    onCancel,
    title = "Modal",
    children,
    isLoading = false,
    isSaving = false
}: ModalProps) {
    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted || !isOpen) {
        return null;
    }

    return createPortal(
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-3 sm:p-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-md relative animate-fadeIn max-h-[90vh] overflow-auto">
                <div className="p-4 sm:p-6">
                    <div className="flex justify-between items-center mb-3 sm:mb-4">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">{title}</h3>
                        {onCancel && (
                            <button
                                onClick={onCancel}
                                className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none p-1"
                                aria-label="Close modal"
                            >
                                <span className="sr-only">Close</span>
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        )}
                    </div>

                    <div className="text-gray-800 dark:text-gray-200">
                        {children}
                    </div>

                    <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row justify-end sm:space-x-3 space-y-2 sm:space-y-0">
                        {onCancel && (
                            <button
                                className="btn btn-secondary w-full sm:w-auto order-2 sm:order-1"
                                onClick={onCancel}
                                disabled={isLoading || isSaving}
                            >
                                Cancel
                            </button>
                        )}
                        <button
                            className="btn btn-primary flex items-center justify-center min-w-[80px] w-full sm:w-auto order-1 sm:order-2"
                            onClick={onClose}
                            disabled={isLoading || isSaving}
                        >
                            {isSaving ? (
                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                            ) : (
                                <span>Save</span>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
}