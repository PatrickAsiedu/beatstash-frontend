
import useAuth from '../hooks/useAuth'
import { useLocation ,Navigate,Outlet } from 'react-router-dom'
import { AuthState } from '../types/authTypes'


type ProtectedRouteProps={
    allowedRoles: number[]
}

const ProtectedRoute = ({allowedRoles}:ProtectedRouteProps) => {
    const {user} = useAuth() as AuthState
  
    const location= useLocation()




  return (
  
    user?.roles.find(role => allowedRoles?.includes(role))
    ? <Outlet/>
    : user
      ? <Navigate to="/unauthorized" state={{from: location}} replace />
      : <Navigate to="/signin" state={{from: location}} replace />
    
 
  )

}

export default ProtectedRoute