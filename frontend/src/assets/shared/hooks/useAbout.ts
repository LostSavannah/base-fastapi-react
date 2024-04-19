import { useEffect, useState } from "react";
import { AboutService } from "../services/AboutService";

export function useAbout(){
    const [about, setAbout] = useState<string>("");
    useEffect(()=>{
        new AboutService().getAbout().then(setAbout);
    }, []);
    return{
        about
    }
}