import { useRouter } from "next/router";
import { useEffect } from "react";

export default function ChapterPage() {
    const { query } = useRouter()
    useEffect(() => {
        if (!query.mangaId || !query.chapterId) return;
        
    }, [query])
}