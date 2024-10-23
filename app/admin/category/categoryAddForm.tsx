'use client';
import { useState } from "react";
import { useForm } from "react-hook-form";
import Image from 'next/image';

const CategoryAddForm = () => {
    const { register, handleSubmit, watch } = useForm();
    const file = watch('cover');

    const [selectedFile, setSelectedFile] = useState<string | null>(null);
    const [uploadStatus, setUploadStatus] = useState<string>('');

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setSelectedFile(e.target.files[0]);
        }
    };

    const submitForm = async (data: any) => {
        if (!selectedFile) {
            setUploadStatus('No file selected');
            return false;
        }

        const formData = new FormData();
        formData.append('file', selectedFile);

        try {
            const response = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Failed to upload file');
            }

            const data = await response.json();
            console.log(data);

            setUploadStatus(`File uploaded successfully: ${data.filePath}`);
        } catch (error) {
            console.error('Error uploading file:', error);
            setUploadStatus('Error uploading file');
        }
    };



    return (
        <div className="col-span-6">
            <form onSubmit={handleSubmit(submitForm)}>
                <div className="flex mt-2 gap-2 items-center justify-between">
                    <label className="diodfont-semibold text-md" htmlFor="title">عنوان : </label>
                    <input {...register('title', { required: "عنوان را وارد کنید" })}
                        className="diodfont-semibold text-sm shadow-md bg-blue-200 w-full max-w-xs h-9 p-1 pr-2 pb-2 rounded-xl"
                        type="text"
                        name="title"
                        id="title"
                    />
                </div>

                <div className="flex mt-2 gap-2 items-center justify-between">
                    <label className="diodfont-semibold text-md" htmlFor="status">وضعیت : </label>
                    <select {...register('status')}
                        className="diodfont-semibold text-sm shadow-md bg-blue-200 w-full max-w-xs h-9 pr-2 pb-2 rounded-xl"
                        name="status"
                        id="status"
                    >
                        <option selected value="فعال">فعال</option>
                        <option value="غیرفعال">غیرفعال</option>
                    </select>
                </div>

                <div className="flex mt-2 gap-2 items-center justify-between">
                    <label className="diodfont-semibold text-md" htmlFor="file">کاور :{" "}</label>
                    <div className="w-full max-w-xs justify-between gap-2 flex">
                        <input
                            className="mt-2"
                            type="file"
                            name="file"
                            onChange={async (e) => { 
                                if (e.target.files) {
                                    const formData = new FormData();
                                                                        
                                    Object.values(e.target.files).forEach((file) => {
                                        formData.append("file", file);
                                    });

                                    const response = await fetch("/api/upload", {
                                        method: "POST",
                                        body: formData,
                                    });

                                    const result = await response.json();
                                    const file_path = result.filePath;
                                    const temp_path = file_path.split("/");
                                    
                                    setSelectedFile('/api/files/'+temp_path[2]);
                                    
                                    // if (result.success) {
                                    //     alert("Upload ok : " + result.filepath);
                                    // } else {
                                    //     alert("Upload failed");
                                    // }
                                }
                            }}
                        />
                        <div className="justify-end w-1/2 h-1/2">
                            <Image
                                className="rounded-xl"
                                src={selectedFile ? selectedFile : "/img/images.jpg"}
                                alt="Uploaded Image"
                                width={500} 
                                height={500} 
                            />
                        </div>
                    </div>
                </div>


                <div className="flex mt-2 gap-2 items-center justify-between">
                    <label className="diodfont-semibold text-md" htmlFor="description">توضیحات : </label>
                    <textarea {...register('description')}
                        className="diodfont-semibold text-sm shadow-md bg-blue-200 w-full h-32 max-w-xs p-1 pr-2 pb-2 rounded-xl"
                        name="description"
                        id="description"
                    />
                </div>

                <div className="flex justify-end mt-5">
                    <button
                        type="submit"
                        className="w-28 bg-gradient-to-r from-green-400 to-green-700 hover:from-green-500 hover:to-green-800 p-2 pb-3 text-white rounded-lg diodfont-semibold text-md"
                    >
                        ثبت
                    </button>
                </div>

                {uploadStatus && <p className="mt-3 text-red-500">{uploadStatus}</p>}
            </form>
        </div>
    );
}

export default CategoryAddForm;
