import { createContext } from "react";
import { ChangeContextType } from "@/types";

const ChangeContext = createContext<ChangeContextType | undefined>(undefined);
export default ChangeContext;