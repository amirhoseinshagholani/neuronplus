'use client';
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Image from 'next/image';
import { httpService, swalMessage } from "../components/functions";
import { useCookies } from "react-cookie";
import TrueSvg from "@/public/svg/components/true";
import EditSvg from "@/public/svg/components/editSvg";
import { Span } from "next/dist/trace";
import ImageSvg from "@/public/svg/components/imageSvg";
import { Link } from "react-router-dom";


const CategoryAddForm = () => {

    interface Categories {
        id: number,
        title: string,
        cover: string,
        status: string,
        description: string
    }

    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    const { register, handleSubmit, watch } = useForm();
    const [titleValue, setTitleValue] = useState("");
    const [statusValue, setStatusValue] = useState("1");
    const [descriptionValue, setDescriptionValue] = useState("");

    const [categories, setCategories] = useState<Categories[] | null>(null);

    const file = watch('cover');

    const [selectedFile, setSelectedFile] = useState<string | null>(null);
    const [uploadStatus, setUploadStatus] = useState<string>('');

    const fileInputRef = useRef<HTMLInputElement | null>(null);  // ba ref mitavan mostaghim be item dastresi dasht

    const getCategories = async () => {
        try {
            const responseGetAllCategories = await httpService.get("/categories/get/all", {
                headers: {
                    Authorization: "Bearer " + cookies.token,
                },
            });
            if (responseGetAllCategories.data.data.length != 0) {
                setCategories(responseGetAllCategories.data["data"]);
                // console.log(responseGetAllCategories.data["data"]);

            }
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getCategories();
    }, []);

    const submitForm = async () => {

        if (!titleValue) {
            swalMessage("خطا", "عنوان دسته را وارد کنید", "warning");
            return false;
        }
        if (!selectedFile) {
            setUploadStatus('No file selected');
            return false;
        }

        const token = "Bearer " + cookies.token;

        if (!token) {
            swalMessage("خطا!", "مشکلی پیش آمده است، لطفا بعدا امتحان کنید", "error");
            return false;
        }

        try {
            const responseAddCategory = await httpService.post(
                "/categories/add",
                {
                    title: titleValue,
                    status: statusValue,
                    cover: selectedFile,
                    description: descriptionValue,
                },
                {
                    headers: {
                        Authorization: token,
                    },
                }
            );

            if (true) {
                setTitleValue("");
                setSelectedFile("");
                setDescriptionValue("");

                swalMessage("تبریک میگم!", "دسته بندی مورد نظر با موفقیت ثبت شد", "success");

                getCategories();
                if (fileInputRef.current) {
                    fileInputRef.current.value = '';
                }
            } else {
                swalMessage(
                    "خطا!",
                    "مشکلی در ثبت دسته بندی وجود دارد، لطفا داده های ورودی را بررسی کنید",
                    "error"
                );
                return false;
            }
        } catch (err) {
            swalMessage("خطا!", "مشکلی پیش آمده است، لطفا بعدا امتحان کنید", "error");
            console.log(err);
        }
    };



    return (
        <>
            <div className="col-span-6">
                <form onSubmit={handleSubmit(submitForm)}>
                    <div className="flex mt-2 gap-2 items-center justify-between">
                        <label className="diodfont-semibold text-md" htmlFor="title">عنوان : </label>
                        <input {...register('title')}
                            className="diodfont-semibold text-sm shadow-md bg-blue-200 w-full max-w-xs h-9 p-1 pr-2 pb-2 rounded-xl"
                            type="text"
                            name="title"
                            id="title"
                            onChange={(e) => {
                                setTitleValue(e.target.value);
                            }}
                            value={titleValue}
                        />
                    </div>

                    <div className="flex mt-2 gap-2 items-center justify-between">
                        <label className="diodfont-semibold text-md" htmlFor="status">وضعیت : </label>
                        <select {...register('status')}
                            className="diodfont-semibold text-sm shadow-md bg-blue-200 w-full max-w-xs h-9 pr-2 pb-2 rounded-xl"
                            name="status"
                            id="status"
                            onChange={(e)=>{                                
                                setStatusValue(e.target.value)
                            }}
                            value={statusValue}
                        >
                            <option selected value="1">فعال</option>
                            <option value="0">غیرفعال</option>
                        </select>
                    </div>

                    <div className="flex mt-2 gap-2 items-center justify-between">
                        <label className="diodfont-semibold text-md" htmlFor="file">کاور :{" "}</label>
                        <div className="w-full max-w-xs justify-between gap-2 flex">
                            <input
                                ref={fileInputRef}
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

                                        setSelectedFile('/api/files/' + temp_path[2]);
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
                            onChange={(e) => {
                                setDescriptionValue(e.target.value);
                            }}
                            value={descriptionValue}
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





            <div className="col-span-6 pr-10 pl-5">
                <div className="diodfont-semibold text-md mb-3">دسته ها</div>
                {categories ? (
                    <div className="h-2/3 p-2 rounded-lg bg-slate-600 overflow-auto">
                        {categories.map((category) => (
                            <div key={category.id} className="w-full p-1">
                                <div className="text-gray-800 p-2 text-xs diodfont-semibold bg-gradient-to-r from-purple-300 to-purple-400 shadow-md h-10 w-full rounded-lg">
                                    <div className="flex justify-between h-full">
                                        <span className="flex-shrink-0 overflow-hidden text-ellipsis w-24 whitespace-nowrap">
                                            {category.title}
                                        </span>
                                        <span className="flex-1">
                                            <div className="flex">
                                                {
                                                    category.status === "1" ? <span>فعال</span> : <span>غیرفعال</span>
                                                }
                                            </div>
                                        </span>
                                        <span className="flex-shrink-0 overflow-hidden text-ellipsis w-24 whitespace-nowrap">
                                            {category.description}
                                        </span>
                                        <span className="flex-1 mr-10">
                                            <a href={category.cover}><ImageSvg /></a>
                                        </span>
                                        <span className="flex-2">
                                            <a className="" href="#">
                                                <EditSvg />
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex mx-auto justify-center diodfont-semibold text-sm text-red-400">
                        در حال حاظر هیچ دسته ای ثبت نشده است
                    </div>
                )}
            </div>







        </>
    );
}

export default CategoryAddForm;
