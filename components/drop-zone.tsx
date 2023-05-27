"use client"

import { useCallback, useState } from "react"
import { useRouter } from "next/navigation"
import { useDropzone } from "react-dropzone"
import { Uploader } from "uploader"

import { Files } from "@/types/files"
import { Progress } from "@/components/ui/progress"

interface props {
  className: string
  fileAddedEvent?: (e: any) => void
}

export const  DropZone = ({ className, fileAddedEvent }: props) => {
  const uploader = Uploader({ apiKey: "public_12a1yDhFXdiwiqc5cp4roMGKbtde" })
  const [progress, setProgress] = useState(0)

  const router = useRouter()

  const onDrop = useCallback(
    async (acceptedFiles: any) => {
      const { fileUrl } = await uploader.uploadFile(acceptedFiles[0], {
        onProgress: onProgress,
      })
      if (fileAddedEvent) fileAddedEvent(acceptedFiles as Files)
      router.push(`/chat/${fileUrl}`)
    },
    [fileAddedEvent, router, uploader]
  )

  const onProgress = (progress: any) => {
    console.log(progress.progress)
    setProgress(progress)
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })
  return (
    <form>
        <div className="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
  <div className="h-2.5 rounded-full bg-blue-600"></div>
</div>
      <div
        {...getRootProps({
          className: className,
        })}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag and drop some files here, or click to select files</p>
        )}
      </div>
    </form>
  )
}
