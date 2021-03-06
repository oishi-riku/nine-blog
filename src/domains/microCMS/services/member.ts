import { AllMember } from 'domains/microCMS/models/member';

const BASE_ENDPOINT = process.env.NEXT_PUBLIC_MICRO_CMS_BASE_ENDPOINT || '';
const X_MICROCMS_API_KEY = process.env.NEXT_PUBLIC_X_MICROCMS_API_KEY || '';

export const getAllMember = async (): Promise<AllMember> => {
  const result = await fetch(`${BASE_ENDPOINT}/member`, {
    headers: {
      'X-MICROCMS-API-KEY': X_MICROCMS_API_KEY,
    },
  });
  const json = (await result.json()) as AllMember;

  return json;
};
