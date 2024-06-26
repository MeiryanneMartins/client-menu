import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios, { AxiosPromise } from 'axios';
import { WineData } from '../interface/WineData';

const API_URL = 'http://localhost:8080';

const postData = async (data: WineData): AxiosPromise<unknown> => {
  const response = axios.post(API_URL + '/menu', data);
  return response;
}

export function useMenuDataMutate(){
  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: postData,
    retry: 2,
    onSuccess: () => {
      queryClient.invalidateQueries()
    }
  })

  return mutate;
}
