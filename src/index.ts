import invoke from '@mmstudio/invoke';

interface IWebResult<T> {
	data: T;
}

export default async function an5<T>(service: string, msg: unknown, actionid: string) {
	const ret = await invoke<T | IWebResult<T>>(service, msg, actionid);
	if ((ret as IWebResult<T>).data) {
		return (ret as IWebResult<T>).data;
	}
	return ret as T;
}
