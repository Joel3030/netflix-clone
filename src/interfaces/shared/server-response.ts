export type ServerResponse<T> = {
	status: 'success' | 'error';
	message: string;
	data?: T;
	error?: unknown;
};
