'use client';
import { usePathname } from "next/navigation";

const useGetRoute = ()=>{
    const currentRoute = usePathname();
    return currentRoute;
}

export default useGetRoute;

