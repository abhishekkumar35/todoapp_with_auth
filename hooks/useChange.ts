import { useContext } from "react";
import ChangeContext from "@/lib/ChangeContextProvider";
import { ChangeContextType } from "@/types";

export const useChange = (): ChangeContextType => {
    const context = useContext<ChangeContextType | undefined>(ChangeContext);
    
    if (!context) {
        throw new Error('useChange must be used within a ChangeContextProvider');
    }
    
    const { change, setChange } = context;
    
    return { change, setChange };
}