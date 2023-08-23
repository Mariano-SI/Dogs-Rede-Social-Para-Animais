import React, {useContext} from 'react'
import { UserContext } from '../UserContext'
import { Navigate } from 'react-router-dom';

interface IProtectedRoute{
    children: React.ReactNode
}
const ProtectedRoute = ({children}: IProtectedRoute) => {

  const{logged} = useContext(UserContext);

  if(logged == true) {
    return children
  }else if(logged === false){
    return <Navigate to="/login"/>
  }else{
    return <></>
  }
}

export default ProtectedRoute