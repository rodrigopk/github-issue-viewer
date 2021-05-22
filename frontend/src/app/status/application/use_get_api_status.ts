import { useQuery } from '../../../libs/query';
import { ApiStatusFacade } from '../infrastructure/api_status_facade';

export const useGetApiStatus = (facade = new ApiStatusFacade()) => {
  const { data, isFetching } = useQuery('status', () => facade.getStatus());

  return { status: data?.status, isFetching };
};
