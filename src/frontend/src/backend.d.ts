import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Announcement {
    id: bigint;
    title: string;
    content: string;
    timestamp: Time;
}
export interface Inquiry {
    id: bigint;
    subject: string;
    name: string;
    email: string;
    message: string;
    timestamp: Time;
}
export type Time = bigint;
export interface ContactForm {
    subject: string;
    name: string;
    email: string;
    message: string;
}
export interface Event {
    id: bigint;
    title: string;
    date: Time;
    description: string;
    location: string;
}
export interface backendInterface {
    createAnnouncement(title: string, content: string): Promise<bigint>;
    createEvent(title: string, description: string, date: Time, location: string): Promise<bigint>;
    getAnnouncement(id: bigint): Promise<Announcement>;
    getAnnouncements(): Promise<Array<Announcement>>;
    getEvent(id: bigint): Promise<Event>;
    getEvents(): Promise<Array<Event>>;
    getInquiries(): Promise<Array<Inquiry>>;
    getInquiry(id: bigint): Promise<Inquiry>;
    submitInquiry(form: ContactForm): Promise<bigint>;
}
