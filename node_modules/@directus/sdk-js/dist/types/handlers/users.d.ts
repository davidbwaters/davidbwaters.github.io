import { AxiosInstance } from 'axios';
import { ItemsHandler } from './items';
import { Query, Payload } from '../types';
export declare type UserInfo = {
    avatar: string | null;
    description: string | null;
    email: string;
    first_name: string | null;
    id: string;
    language: string;
    last_access: string;
    last_name: string | null;
    last_page: string;
    location: string | null;
    password: string;
    role: string;
    status: string;
    tags: string[];
    tfa_secret: string | null;
    theme: 'auto' | 'dark' | 'light';
    title: string | null;
    token: string | null;
};
export declare class UsersHandler extends ItemsHandler {
    constructor(axios: AxiosInstance);
    invite(email: string | string[], role: string): Promise<void>;
    acceptInvite(token: string, password: string): Promise<void>;
    tfa: {
        enable: (password: string) => Promise<void>;
        disable: (otp: string) => Promise<void>;
    };
    me: {
        read: (query?: Query | undefined) => Promise<{
            data: Partial<UserInfo>;
        }>;
        update: (payload: Payload, query?: Query | undefined) => Promise<{
            data: Partial<UserInfo>;
        }>;
    };
}
