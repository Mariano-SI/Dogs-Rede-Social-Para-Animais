import React, {useEffect}from 'react'
import Head from '../../../../Common/Components/Head/Head'
import useFetch from '../../../../Common/CustomHooks/useFEtch'
import { GET_STATS } from '../../../../Common/api'
import Loading from '../../../../Common/Components/Loading/Loading'
import Error from '../../../../Common/Components/Error/Error'
const UserStatsGraphs = React.lazy(()=> import('./Components/UserStatsGraphs/UserStatsGraphs'));

const UserStats = () => {

  const {data, error, loading, request} = useFetch();

  useEffect(()=>{
    async function getData(){
      const {url, options} = GET_STATS();
      await request(url, options);
    }

    getData();
  },[request]);

  if(loading) return <Loading/>
  if(error) return <Error message={error}/>
  if(data){
    return (
      <React.Suspense fallback={<Loading/>}>
        <Head title='Estatísticas' />
        <UserStatsGraphs data={data}/>
      </React.Suspense>
    )
  }
  else return null;
}

export default UserStats