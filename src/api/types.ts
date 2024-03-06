/* eslint-disable @typescript-eslint/no-explicit-any */
export enum Method {
	POST = 'post',
	GET = 'get',
}

export type PostRequest = {
	method: Method.POST;
	data: any;
};

export type GetRequest = {
	method: Method.GET;
	params: any;
};

export type ApiRequest = {
	url: string;
} & (GetRequest | PostRequest);
