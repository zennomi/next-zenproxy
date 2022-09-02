import { MangaStatus } from "paperback-extensions-common";

export function fStatus(status: MangaStatus) {
    switch(status) {
        case 0: return "đã hoàn thành";
        case 1: return "đang tiến hành";
        case 2: return "không rõ";
        case 3: return "dừng vô hạn";
        case 4: return "tạm ngừng";
    }
}