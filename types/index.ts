import { Dispatch, SetStateAction } from "react";

export type NoteType = {
    id: string;
    note: string;
    timestamp: string;
}
export type ChangeType = {
    del_id :string,
    edit_id:string
}
export interface ChangeContextType {
    change: ChangeType | undefined ,
    setChange: Dispatch<SetStateAction<ChangeType | undefined>> 
  }

