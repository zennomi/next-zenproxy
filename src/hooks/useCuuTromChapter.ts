import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { CUUTROM_API } from "../config";

export default function (path: string) {
    return useQuery(
        [path],
        async () => {
            const { data } = await axios.get(`${CUUTROM_API}${path}`)
            return data
        },
        {
            enabled: !!path,

        }
    )
} 