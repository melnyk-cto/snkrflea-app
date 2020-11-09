// core
import React, { useState, useEffect } from 'react'

// library
import { useDropzone } from 'react-dropzone';

export const DropZone = ({files, setFiles}) => {

    const {getRootProps, getInputProps, isDragActive} = useDropzone({
        accept: 'image/*',
        onDrop: acceptedFiles => {
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
        }
    });

    const thumbs = files.map(file => (
        <div key={file.name}>
            <img src={file.preview} alt='' />
        </div>
    ));

    useEffect(() => () => {
        // Make sure to revoke the data uris to avoid memory leaks
        files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);

    return (
        <>
            {files.length === 0 ? <div className='dropZone' {...getRootProps()}>
                <input {...getInputProps()} />
                {
                    isDragActive ?
                        <p className='active'>Drop the files here ...</p> :
                        <div className='active'>Drag or drop to upload photos</div>
                }
            </div> : <div>{thumbs}</div>}
        </>
    )
};
