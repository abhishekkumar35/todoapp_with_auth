"use client";
import { NoteType } from "@/types";
import Modal from "./Modal"
import { useState } from "react"
import { useChange } from "@/hooks/useChange";

export default function Edit({id}:{id:string}) {
    const [isModalOpen, setModalOpen] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isSaving, setIsSaving] = useState<boolean>(false);
    const [editableData, setEditableData] = useState<NoteType | null>(null);
    const {setChange} = useChange();

    async function handleOpen() {
        try {
            setIsLoading(true);
            setModalOpen(true);

            const res = await fetch(`/api/notes`, {
                method: "GET",
                headers: {"Content-Type": "application/json"}
            });

            if (!res.ok) {
                if (res.status === 401) {
                    console.error("Unauthorized: You need to be signed in to edit notes");
                } else {
                    console.error("Failed to fetch notes");
                }
                return;
            }

            const data = await res.json();

            if (data.error) {
                console.error("Error:", data.error);
                return;
            }

            const dataToEdit = data.notes.find((note: NoteType) => note.id === id);

            setEditableData(dataToEdit || null);
        } catch (error) {
            console.error("Error fetching note data:", error);
        } finally {
            setIsLoading(false);
        }
    }

    async function handleClose() {
        if (!editableData) {
            setModalOpen(false);
            return;
        }

        try {
            setIsSaving(true);

            const res = await fetch("/api/notes", {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({id, note: editableData})
            });

            if (!res.ok) {
                if (res.status === 401) {
                    console.error("Unauthorized: You need to be signed in to update notes");
                } else {
                    console.error("Failed to update note");
                }
                return;
            }

            const data = await res.json();

            if (data.error) {
                console.error("Error:", data.error);
                return;
            }

            if (data.success) {
                setChange({del_id: '0', edit_id: id});
                setModalOpen(false);
            } else {
                console.error("Failed to update note:", data.message);
            }
        } catch (error) {
            console.error("Error updating note:", error);
        } finally {
            setIsSaving(false);
        }
    }

    function handleCancel() {
        setModalOpen(false);
    }

    return (
        <>
            <Modal
                isOpen={isModalOpen}
                onClose={handleClose}
                onCancel={handleCancel}
                title="Edit Note"
                isLoading={isLoading}
                isSaving={isSaving}
            >
                {isLoading ? (
                    <div className="flex justify-center items-center py-8">
                        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
                    </div>
                ) : (
                    <textarea
                        className="input w-full h-32 resize-none"
                        value={editableData?.note || ""}
                        onChange={(e) =>
                            editableData &&
                            setEditableData({
                                ...editableData,
                                note: e.target.value,
                                timestamp: new Date().toISOString()
                            })
                        }
                        placeholder="Enter your note here..."
                    />
                )}
            </Modal>

            <button
                className="btn btn-primary flex items-center justify-center min-w-[80px] mr-2"
                onClick={handleOpen}
            >
                Edit
            </button>
        </>
    );
}