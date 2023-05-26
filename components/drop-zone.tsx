"use client";
import { useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { Uploader } from "uploader";

interface props {
    className: string;
    fileAddedEvent: (e: any) => void;
}

const DropZone = ({className,fileAddedEvent} : props) => {
    const uploader = Uploader({ apiKey: "public_12a1yDhFXdiwiqc5cp4roMGKbtde" });
    const onDrop = useCallback(async (acceptedFiles:any) => {
        debugger;
        const {fileUrl} = await uploader.uploadFile(acceptedFiles[0]);
        console.log("File url:"+fileUrl);
        fileAddedEvent(acceptedFiles as files) 
    }, [fileAddedEvent, uploader])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })
    return (
        <form>
            <div {...getRootProps({
                className: className
            })}>
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

export default DropZone