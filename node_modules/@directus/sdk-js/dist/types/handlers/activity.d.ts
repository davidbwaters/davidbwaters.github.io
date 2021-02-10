import { AxiosInstance } from 'axios';
import { Query, PrimaryKey, Item, Response } from '../types';
export declare class ActivityHandler {
    private axios;
    private itemsHandler;
    constructor(axios: AxiosInstance);
    read<T extends Item>(query?: Query): Promise<Response<T | T[]>>;
    read<T extends Item>(key: PrimaryKey, query?: Query): Promise<Response<T>>;
    read<T extends Item>(keys: PrimaryKey[], query?: Query): Promise<Response<T | T[]>>;
    comments: {
        create: (payload: {
            collection: string;
            item: string;
            comment: string;
        }) => Promise<Response<Item>>;
        update: (key: PrimaryKey, payload: {
            comment: string;
        }) => Promise<{
            data: Item | null;
        }>;
        delete: (key: PrimaryKey) => Promise<void>;
    };
}
