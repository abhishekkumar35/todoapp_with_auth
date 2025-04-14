import { useState, useEffect } from "react";
import { createPortal } from "react-dom";


export default function Modal({ isOpen, onClose, children }: { isOpen: boolean, onClose: ()=>void, children: React.ReactNode }) {
    const [mounted,setMounted]=useState<boolean>()

    useEffect(() => {
        setMounted(true);
      }, []);

   

    if(!mounted || !isOpen){
        return null
    }

    return createPortal(
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="bg-gray-800 p-6 rounded-lg shadow-xl w-96 relative">
            <div className="text-white">
                {children}
            </div>
            <button 
                className="mt-4 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition-colors"
                onClick={onClose}
            >
                Submit
            </button>
        </div>
    </div>, 
        document.body
    )
}