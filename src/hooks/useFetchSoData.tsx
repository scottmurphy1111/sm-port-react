import {fetchSoData} from 'api/fetchSoData'
import {useQuery} from 'react-query'
import {StackOverflowData} from 'types/stack-overflow-data'

const QUERY_KEY_DATA = 'so-data'
export const useFetchSoData = () => {
  return useQuery<StackOverflowData>([QUERY_KEY_DATA], () => fetchSoData())
}
