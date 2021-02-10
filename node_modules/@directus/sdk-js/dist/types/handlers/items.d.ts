import { Query, Item, Payload, Response, PrimaryKey } from '../types';
import { AxiosInstance } from 'axios';
export declare class ItemsHandler {
    axios: AxiosInstance;
    private endpoint;
    constructor(collection: string, axios: AxiosInstance);
    create<T extends Item>(payload: Payload, query?: Query): Promise<Response<T>>;
    create<T extends Item>(payloads: Payload[], query?: Query): Promise<Response<T[]>>;
    read<T extends Item>(): Promise<Response<T | T[]>>;
    read<T extends Item>(query: Query & {
        single: true;
    }): Promise<Response<T>>;
    read<T extends Item>(query: Query): Promise<Response<T | T[]>>;
    read<T extends Item>(key: PrimaryKey, query?: Query): Promise<Response<T>>;
    read<T extends Item>(keys: PrimaryKey[], query?: Query): Promise<Response<T | T[]>>;
    update<T extends Item>(key: PrimaryKey, payload: Payload, query?: Query): Promise<Response<T>>;
    update<T extends Item>(keys: PrimaryKey[], payload: Payload, query?: Query): Promise<Response<T[]>>;
    update<T extends Item>(payload: Payload[], query?: Query): Promise<Response<T[]>>;
    update<T extends Item>(payload: Payload, query: Query): Promise<Response<T[]>>;
    delete(key: PrimaryKey): Promise<void>;
    delete(keys: PrimaryKey[]): Promise<void>;
}
