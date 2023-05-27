"use client"

import { useState } from "react"

import { Files } from "@/types/files"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { DropZone } from "@/components/drop-zone"

const SideBar = () => {
  const [files, setFiles] = useState<Files[]>([])

  const fileAddedEvent = async (e: Files) => {
    console.log("In file added event:" + e)
    setFiles(files.concat(e))
  }

  return (
    <div className="w-52 flex-none border">
      <AlertDialog>
        <AlertDialogTrigger className="w-full border border-red-400">
          <Button className="w-full" variant="outline">
            Create a New Chat
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Create a New Chat</AlertDialogTitle>
            <AlertDialogDescription>
              <DropZone
                className="mt-10 border border-neutral-200 p-16"
                fileAddedEvent={fileAddedEvent}
              />
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <ul>
        {files.map((file) => (
          <li key={file.name}>{file.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default SideBar
