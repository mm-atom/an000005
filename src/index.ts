import invoke from '@mmstudio/invoke';
import config from '@mmstudio/config';

interface IWebResult<T> {
	data: T;
}

export default async function an5<T>(service: string, msg: unknown, actionid: string) {
	const ret = await invoke<T | IWebResult<T>>(config.cwd, service, msg, actionid);
	if ((ret as IWebResult<T>).data) {
		return (ret as IWebResult<T>).data;
	}
	return ret as T;
}
