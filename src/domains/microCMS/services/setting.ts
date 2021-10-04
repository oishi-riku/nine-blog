import { Input } from 'validation/setting';

const BASE_ENDPOINT = process.env.NEXT_PUBLIC_MICRO_CMS_BASE_ENDPOINT || '';
const X_WRITE_API_KEY = process.env.NEXT_PUBLIC_X_WRITE_API_KEY || '';

export const updateSetting = async ({
  id,
  payload,
}: {
  id: string;
  payload: Input;
}): Promise<void> => {
  void (await fetch(`${BASE_ENDPOINT}/member/${id}`, {
    headers: {
      'content-type': 'application/json',
      'X-WRITE-API-KEY': X_WRITE_API_KEY,
    },
    method: 'PATCH',
    body: JSON.stringify(payload),
  }));
};
