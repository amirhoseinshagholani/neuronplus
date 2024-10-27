'use client';

import EditSvg from "@/public/svg/components/editSvg";
import FalseSvg from "@/public/svg/components/false";
import ImageSvg from "@/public/svg/components/imageSvg";
import TrueSvg from "@/public/svg/components/true";
import { useEffect, useRef, useState } from "react";
import { httpService, swalMessage } from "../components/functions";
import { useCookies } from "react-cookie";
import Image from "next/image";
import { useForm } from "react-hook-form";

const CoursesAddForm = () => {
    interface Categories {
        id: number,
        title: string,
        cover: string,
        status: string,
        description: string
    }

    interface Packages {
        id: number,
        title: string,
        category_title:string,
        cover: string,
        status: string,
        price: string,
        description: string
    }

    const { handleSubmit } = useForm();

    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    const [categories, setCategories] = useState<Categories[] | null>(null);
    const [packages, setPackages] = useState<Packages[] | null>(null);

    const [category, setCategory] = useState<string>();
    const [title, setTitle] = useState<string>();
    const [slug, setSlug] = useState<string>();
    const [price, setPrice] = useState<string>();
    const [cover, setCover] = useState<string>();
    const [status, setStatus] = useState<string>("0");
    const [description, setDescription] = useState<string>();
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const getCategories = async () => {
        try {
            const responseGetAllCategories = await httpService.get("/categories/get/all", {
                headers: {
                    Authorization: "Bearer " + cookies.token,
                },
            });
            if (responseGetAllCategories.data.data.length != 0) {
                setCategories(responseGetAllCategories.data["data"]);
            }
        } catch (err) {
            console.log(err);
        }
    };

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
        getCategories();
        getPackages();
    }, []);

    const submitForm = async () => {
        if (!category) {
            swalMessage("خطا", "دسته را انتخاب کنید", "warning");
            return false;
        }
        if (!title) {
            swalMessage("خطا", "عنوان را وارد کنید", "warning");
            return false;
        }
        if (!slug) {
            swalMessage("خطا", "نامک را وارد کنید", "warning");
            return false;
        }
        if (!price) {
            swalMessage("خطا", "قیمت را وارد کنید", "warning");
            return false;
        }
        if (!cover) {
            swalMessage("خطا", "تصویر کاور را انتخاب کنید", "warning");
            return false;
        }

        const token = "Bearer " + cookies.token;

        if (!token) {
            swalMessage("خطا!", "مشکلی پیش آمده است، لطفا بعدا امتحان کنید", "error");
            return false;
        }

        try {
            const responseAddPackage = await httpService.post(
                "/packageHeader/add",
                {
                    cat_id: category,
                    title: title,
                    slug: slug,
                    price: price,
                    cover: cover,
                    description: description,
                    status: status
                },
                {
                    headers: {
                        Authorization: token,
                    },
                }
            );

            
            setCategory("");
            setTitle("");
            setSlug("");
            setPrice("");
            setCover("");
            setDescription("");
            setStatus("0");
            if (fileInputRef.current) {
                fileInputRef.current.value = '';
            }
            swalMessage("تبریک میگم!", "پکیج مورد نظر با موفقیت ثبت شد", "success");
            getPackages();

            if (fileInputRef.current) {
                fileInputRef.current.value = '';
            }

        } catch (err) {
            swalMessage("خطا!", "مشکلی پیش آمده است، لطفا بعدا امتحان کنید", "error");
            console.log(err);
        }
    }


    return (
        <>
            <form onSubmit={handleSubmit(submitForm)}>
                <div className="w-full h-[90%] bg-white p-5 rounded-b-2xl overflow-auto grid grid-cols-12">
                    <div className="col-span-6">
                        <div className="flex gap-2 items-center justify-between">
                            <label className="diodfont-semibold text-md" htmlFor="category">
                                دسته بندی :{" "}
                            </label>
                            <select
                                className="diodfont-semibold text-sm shadow-md bg-blue-200 w-full max-w-xs h-9 pr-2 pb-2 rounded-xl"
                                name="category"
                                id="category"
                                onChange={(e) => setCategory(e.target.value)}
                                value={category}
                            >
                                <option value="">انتخاب کنید ...</option>
                                {
                                    categories && categories.map((category) => (
                                        <option key={category.id} value={category.id}>{category.title}</option>
                                    ))
                                }
                            </select>
                        </div>


                        <div className="flex mt-2 gap-2 items-center justify-between">
                            <label className="diodfont-semibold text-md" htmlFor="title">
                                نام دوره :{" "}
                            </label>
                            <input
                                className="diodfont-semibold text-sm shadow-md bg-blue-200 w-full max-w-xs h-9 p-1 pr-2 pb-2 rounded-xl"
                                type="text"
                                name="title"
                                id="title"
                                onChange={(e) => setTitle(e.target.value)}
                                value={title}
                            />
                        </div>

                        <div className="flex mt-2 gap-2 items-center justify-between">
                            <label className="diodfont-semibold text-md" htmlFor="title">نامک  : </label>
                            <input
                                className="diodfont-semibold text-sm shadow-md bg-blue-200 w-full max-w-xs h-9 p-1 pr-2 pb-2 rounded-xl"
                                type="text"
                                name="slug"
                                id="slug"
                                onChange={(e) => setSlug(e.target.value)}
                                value={slug}
                            />
                        </div>

                        {/* قیمت */}
                        <div className="flex mt-2 gap-2 items-center justify-between">
                            <label className="diodfont-semibold text-md" htmlFor="price">
                                هزینه ثبت نام(تومان) :{" "}
                            </label>
                            <input
                                className="diodfont-semibold text-sm shadow-md bg-blue-200 w-full max-w-xs h-9 p-1 pr-2 pb-2 rounded-xl"
                                type="text"
                                name="price"
                                id="price"
                                onChange={(e) => setPrice(e.target.value)}
                                value={price}
                            />
                        </div>

                        <div className="flex mt-2 gap-2 items-center justify-between">
                            <label className="diodfont-semibold text-md" htmlFor="file">
                                کاور :{" "}
                            </label>
                            <div className="w-full max-w-xs justify-between gap-2 flex">
                                <input
                                    ref={fileInputRef}
                                    className="diodfont-semibold w-60 text-sm shadow-md bg-blue-200 h-9 p-1 pr-2 pb-2 rounded-xl"
                                    type="file"
                                    name="file"
                                    id="file"
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
                            <label className="diodfont-semibold text-md" htmlFor="status">
                                وضعیت :{" "}
                            </label>
                            <select
                                className="diodfont-semibold text-sm shadow-md bg-blue-200 w-full max-w-xs h-9 pr-2 pb-2 rounded-xl"
                                name="status"
                                id="status"
                                onChange={(e) => setStatus(e.target.value)}
                                value={status}
                            >
                                <option value="1">
                                    فعال
                                </option>
                                <option selected value="0">غیرفعال</option>
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
                                className="diodfont-semibold text-sm shadow-md bg-blue-200 w-full max-w-xs p-1 pr-2 pb-2 rounded-xl"
                                name="description"
                                id="description"
                                onChange={(e) => setDescription(e.target.value)}
                                value={description}
                            />
                        </div>

                        <div className="flex justify-center mt-5">
                            <button
                                type="submit"
                                className="w-28 bg-gradient-to-r from-green-400 to-green-700 hover:from-green-500 hover:to-green-800 p-2 pb-3 text-white rounded-lg diodfont-semibold text-md"
                            >
                                ثبت
                            </button>
                        </div>
                    </div>

                    <div className="col-span-6 pr-10 pl-5">
                        <div className="diodfont-semibold text-md mb-3">دسته ها</div>
                        {packages ? (
                            <div className="h-2/3 p-2 rounded-lg bg-slate-600 overflow-auto">
                                {packages.map((pack) => (
                                    <div key={pack.id} className="w-full p-1">
                                        <div className="text-gray-800 p-2 pt-2 text-xs diodfont-semibold bg-gradient-to-r from-purple-300 to-purple-400 shadow-md h-10 w-full  rounded-lg">
                                            <div className="flex justify-between">
                                                <span className="flex-shrink-0 overflow-hidden text-ellipsis w-20 whitespace-nowrap">
                                                    {pack.title}
                                                </span>
                                                <span className="flex-1 mr-5 diodfont-medium">
                                                    {pack.category_title}
                                                </span>
                                                <span className="flex-1 mr-3 diodfont-medium">{pack.price}</span>

                                                <span className="flex-1 mr-5">
                                                    <a href={pack.cover}>
                                                        <ImageSvg />
                                                    </a>
                                                </span>
                                                <span className="flex-1 mr-3">
                                                    {pack.status == "1" ? "فعال" : "غیرفعال"}
                                                </span>
                                                <span className="flex-2 mr-3">
                                                    <EditSvg />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="flex mx-auto justify-center diodfont-semibold text-sm text-red-400">
                                در حال حاظر هیچ دوره ای ثبت نشده است
                            </div>
                        )}
                    </div>
                </div>
            </form>
        </>
    )
}

export default CoursesAddForm;