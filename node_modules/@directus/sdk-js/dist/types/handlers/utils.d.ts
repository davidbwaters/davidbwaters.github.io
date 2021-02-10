import { AxiosInstance } from 'axios';
import { PrimaryKey } from '../types';
export declare class UtilsHandler {
    private axios;
    constructor(axios: AxiosInstance);
    random: {
        string: (length?: number) => Promise<{
            data: string;
        }>;
    };
    hash: {
        generate: (string: string) => Promise<{
            data: string;
        }>;
        verify: (string: string, hash: string) => Promise<{
            data: boolean;
        }>;
    };
    sort(collection: string, item: PrimaryKey, to: PrimaryKey): Promise<void>;
    revert(revision: PrimaryKey): Promise<void>;
}
