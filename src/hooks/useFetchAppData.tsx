import {fetchAppData} from 'api/fetchAppData'
import {useAppContext} from 'common/context/useAppContext'
import {useQuery} from 'react-query'
import {AppData} from 'types/data'

const QUERY_KEY_DATA = 'app-data'

export const useFetchAppData = () => {
  const {dispatch} = useAppContext()
  return useQuery<AppData>([QUERY_KEY_DATA], () => fetchAppData(), {
    onSuccess: data => {
      dispatch({
        type: 'GET_DATA',
        payload: data,
      })
    },
  })
}
