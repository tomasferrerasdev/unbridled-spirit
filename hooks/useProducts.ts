import useSWR, { SWRConfiguration } from 'swr';
import { Iproduct } from '../interfaces';
//const fetcher = (...args: [key: string]) =>
//  fetch(...args).then((res) => res.json());

export const useProducts = (url: string, config: SWRConfiguration = {}) => {
  const { data, error } = useSWR<Iproduct[]>(`/api${url}`, config);

  return {
    products: data || [],
    isLoading: !error && !data,
    isError: error,
  };
};
