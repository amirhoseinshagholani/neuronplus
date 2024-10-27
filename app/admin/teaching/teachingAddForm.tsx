'use client';
import DownloadPdfSvg from "@/public/svg/components/downloadPdfSvg";
import DownloadVideoSvg from "@/public/svg/components/downloadVideo";
import EditSvg from "@/public/svg/components/editSvg";
import FalseSvg from "@/public/svg/components/false";
import LockSvg from "@/public/svg/components/lockSvg";
import TrueSvg from "@/public/svg/components/true";
import UnlockSvg from "@/public/svg/components/unlockSvg";
import { useEffect, useRef, useState } from "react";
import { useCookies } from "react-cookie";
import { httpService } from "../components/functions";
import Image from "next/image";

const TeachingAddForm = () => {
    interface Packages {
        id: number,
        title: string,
        cover: string,
        status: string,
        description: string
    }


    const [packages, setPackages] = useState<Packages[] | null>(null);

    const [cover, setCover] = useState<string>();
    const [video, setVideo] = useState<string>();
    const [course,setCourse] = useState("");
    const [title,setTitle] = useState("");
    const [status,setStatus] = useState("");
    const [free,setFree] = useState("");
    const [description,setDescription] = useState("");

    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    const coverInputRef = useRef<HTMLInputElement | null>(null);
    const videoInputRef = useRef<HTMLInputElement | null>(null);


    const getPackages = async () => {
        try {
            const responseGetAllPackages = await httpService.get("/packageHeader/get/all", {
                headers: {
                    Authorization: "Bearer " + cookies.token,
                },
            });
            if (responseGetAllPackages.data.data.length != 0) {
                setPackages(responseGetAllPackages.data["data"]);
            }
        } catch (err) {
            console.log(err);
        }
    };


    useEffect(() => {
        getPackages();
    }, []);

    return (
        <>
            <div className="w-full h-[90%] bg-white p-5 rounded-b-2xl overflow-auto grid grid-cols-12">
                <div className="col-span-6">
                    <div className="flex gap-2 items-center justify-between">
                        <label className="diodfont-semibold text-md" htmlFor="category">
                            دوره :{" "}
                        </label>
                        <select
                            className="diodfont-semibold text-sm shadow-md bg-blue-200 w-full max-w-xs h-9 pr-2 pb-2 rounded-xl"
                            name="category"
                            id="category"
                            onChange={(e)=>setCourse(e.target.value)}
                            value={course}
                        >
                            <option value="">انتخاب کنید ...</option>
                            {
                                packages && packages.map((pack) => (
                                    <option key={pack.id} value={pack.id}>{pack.title}</option>
                                ))
                            }
                        </select>
                    </div>

                    {/* عنوان */}
                    <div className="flex mt-2 gap-2 items-center justify-between">
                        <label className="diodfont-semibold text-md" htmlFor="title">
                            عنوان :{" "}
                        </label>
                        <input
                            className="diodfont-semibold text-sm shadow-md bg-blue-200 w-full max-w-xs h-9 p-1 pr-2 pb-2 rounded-xl"
                            type="text"
                            name="title"
                            id="title"
                            onChange={(e)=>setTitle(e.target.value)}
                            value={title}
                        />
                    </div>

                    <div className="flex mt-2 gap-2 items-center justify-between">
                        <label className="diodfont-semibold text-md" htmlFor="file">
                            کاور :{" "}
                        </label>
                        <div className="w-full max-w-xs justify-between gap-2 flex">
                            <input
                                ref={coverInputRef}
                                className="diodfont-semibold w-60 text-sm shadow-md bg-blue-200 h-9 p-1 pr-2 pb-2 rounded-xl"
                                type="file"
                                name="cover"
                                id="cover"
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

                                        setCover('/api/files/' + temp_path[2]);
                                    }
                                }}

                            />
                            <div className="justify-end w-1/3 h-1/3">
                                <Image
                                    className="rounded-xl"
                                    src={cover ? cover : "/img/images.jpg"}
                                    alt="Uploaded Image"
                                    width={500}
                                    height={500}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex mt-2 gap-2 items-center justify-between">
                        <label className="diodfont-semibold text-md" htmlFor="file">
                            ویدئو :{" "}
                        </label>
                        <input
                            ref={videoInputRef}
                            className="diodfont-semibold text-sm shadow-md bg-blue-200 w-full max-w-xs h-9 p-1 pr-2 pb-2 rounded-xl"
                            type="file"
                            name="video"
                            id="video"
                            onChange={async (e) => {
                                if (e.target.files) {
                                    const formData = new FormData();

                                    Object.values(e.target.files).forEach((file) => {
                                        formData.append("file", file);
                                    });

                                    const response = await fetch("/api/uploadVideo", {
                                        method: "POST",
                                        body: formData,
                                    });

                                    const result = await response.json();
                                    const file_path = result.filePath;
                                    const temp_path = file_path.split("/");

                                    setVideo('/api/videos/' + temp_path[2]);
                                }
                            }}
                        />
                    </div>

                    <div className="flex mt-2 gap-2 items-center justify-between">
                        <label className="diodfont-semibold text-md" htmlFor="status">
                            وضعیت :{" "}
                        </label>
                        <select
                            className="diodfont-semibold text-sm shadow-md bg-blue-200 w-full max-w-xs h-9 pr-2 pb-2 rounded-xl"
                            name="status"
                            id="status"
                            onChange={(e)=>setStatus(e.target.value)}
                            value={status}
                        >
                            <option selected value="فعال">
                                فعال
                            </option>
                            <option value="غیرفعال">غیرفعال</option>
                        </select>
                    </div>

                    <div className="flex mt-2 gap-2 items-center justify-between">
                        <label className="diodfont-semibold text-md" htmlFor="category">
                            مشاهده رایگان :{" "}
                        </label>
                        <select
                            className="diodfont-semibold text-sm shadow-md bg-blue-200 w-full max-w-xs h-9 pr-2 pb-2 rounded-xl"
                            name="free"
                            id="free"
                            onChange={(e)=>setFree(e.target.value)}
                            value={free}
                        >
                            <option selected value="0">
                                خیر
                            </option>
                            <option value="1">بله</option>
                        </select>
                    </div>

                    <div className="flex mt-2 gap-2 items-center justify-between">
                        <label
                            className="diodfont-semibold text-md"
                            htmlFor="description"
                        >
                            توضیحات :{" "}
                        </label>
                        <textarea
                            className="diodfont-semibold text-sm shadow-md bg-blue-200 w-full h-24 max-w-xs p-1 pr-2 pb-2 rounded-xl"
                            name="description"
                            id="description"
                            onChange={(e)=>setDescription(e.target.value)}
                        />
                    </div>
                    <div className="flex justify-center mt-2">
                        <button
                            type="submit"
                            className="w-28 bg-gradient-to-r from-green-400 to-green-700 hover:from-green-500 hover:to-green-800 p-2 pb-3 text-white rounded-lg diodfont-semibold text-md"
                        >
                            ثبت
                        </button>
                    </div>
                </div>

                <div className="col-span-6 pr-10 pl-5">
                    <div className="diodfont-semibold text-md">لیست ویدئوها</div>
                    <div className="w-full p-2">
                        <div className="text-gray-800 p-2 pt-2 text-xs diodfont-semibold bg-gradient-to-r from-purple-300 to-purple-400 shadow-md h-10 w-full mt-2 rounded-lg">
                            <div className="flex justify-between">
                                <span className="flex-shrink-0 overflow-hidden text-ellipsis w-24 whitespace-nowrap">
                                    1- مقدمه
                                </span>
                                <span className="flex-1 mr-10">
                                    <LockSvg />
                                </span>
                                <span className="flex-1">
                                    <a href="#">
                                        <DownloadPdfSvg />
                                    </a>
                                </span>
                                <span className="flex-1">
                                    <a href="#">
                                        <DownloadVideoSvg />
                                    </a>
                                </span>
                                <span className="flex-1">
                                    <TrueSvg />
                                </span>
                                <span className="flex-2">
                                    <EditSvg />
                                </span>
                            </div>
                        </div>
                        <div className="text-gray-800 p-2 pt-2 text-xs diodfont-semibold bg-gradient-to-r from-purple-300 to-purple-400 shadow-md h-10 w-full mt-2 rounded-lg">
                            <div className="flex justify-between">
                                <span className="flex-shrink-0 overflow-hidden text-ellipsis w-24 whitespace-nowrap">
                                    2- معادلات درجه 1
                                </span>
                                <span className="flex-1 mr-10">
                                    <UnlockSvg />
                                </span>
                                <span className="flex-1">
                                    <a href="#">
                                        <DownloadPdfSvg />
                                    </a>
                                </span>
                                <span className="flex-1">
                                    <a href="#">
                                        <DownloadVideoSvg />
                                    </a>
                                </span>
                                <span className="flex-1">
                                    <TrueSvg />
                                </span>
                                <span className="flex-2">
                                    <EditSvg />
                                </span>
                            </div>
                        </div>
                        <div className="text-gray-800 p-2 pt-2 text-xs diodfont-semibold bg-gradient-to-r from-purple-300 to-purple-400 shadow-md h-10 w-full mt-2 rounded-lg">
                            <div className="flex justify-between">
                                <span className="flex-shrink-0 overflow-hidden text-ellipsis w-24 whitespace-nowrap">
                                    3- معادلات درجه 2
                                </span>
                                <span className="flex-1 mr-10">
                                    <UnlockSvg />
                                </span>
                                <span className="flex-1">
                                    <a href="#">
                                        <DownloadPdfSvg />
                                    </a>
                                </span>
                                <span className="flex-1">
                                    <a href="#">
                                        <DownloadVideoSvg />
                                    </a>
                                </span>
                                <span className="flex-1">
                                    <FalseSvg />
                                </span>
                                <span className="flex-2">
                                    <EditSvg />
                                </span>
                            </div>
                        </div>
                        <div className="text-gray-800 p-2 pt-2 text-xs diodfont-semibold bg-gradient-to-r from-purple-300 to-purple-400 shadow-md h-10 w-full mt-2 rounded-lg">
                            <div className="flex justify-between">
                                <span className="flex-shrink-0 overflow-hidden text-ellipsis w-24 whitespace-nowrap">
                                    4- حد و پیوستگی
                                </span>
                                <span className="flex-1 mr-10">
                                    <UnlockSvg />
                                </span>
                                <span className="flex-1">
                                    <a href="#">
                                        <DownloadPdfSvg />
                                    </a>
                                </span>
                                <span className="flex-1">
                                    <a href="#">
                                        <DownloadVideoSvg />
                                    </a>
                                </span>
                                <span className="flex-1">
                                    <TrueSvg />
                                </span>
                                <span className="flex-2">
                                    <EditSvg />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default TeachingAddForm;