import {fetchSoData} from 'api/fetchSoData'
import {useAppContext} from 'context/useAppContext'
import {useQuery} from 'react-query'
import {StackOverflowData} from 'types/stack-overflow-data'

const QUERY_KEY_DATA = 'so-data'
export const useFetchSoData = () => {
  const {dispatch} = useAppContext()
  return useQuery<StackOverflowData>([QUERY_KEY_DATA], () => fetchSoData(), {
    onSuccess: data => {
      dispatch({
        type: 'GET_SO_DATA',
        payload: data,
      })
    },
  })
}
