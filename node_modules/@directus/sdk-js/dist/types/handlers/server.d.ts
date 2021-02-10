import { AxiosInstance } from 'axios';
import type { OpenAPIObject } from 'openapi3-ts';
export declare type ServerInfo = {
    project: {
        project_name: string;
        project_logo: string | null;
        project_color: string | null;
        public_foreground: string | null;
        public_background: string | null;
        public_note: string | null;
        custom_css: null;
    };
    directus?: {
        version: string;
    };
    node?: {
        uptime: number;
        version: string;
    };
    os?: {
        totalmem: number;
        type: string;
        uptime: number;
        version: string;
    };
};
export declare class ServerHandler {
    private axios;
    constructor(axios: AxiosInstance);
    specs: {
        oas: () => Promise<OpenAPIObject>;
    };
    ping(): Promise<'pong'>;
    info(): Promise<{
        data: ServerInfo;
    }>;
}
