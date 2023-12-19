import { Route, Routes } from "react-router-dom"
import { CalendarPage } from "../calendar/";
import { Navigate } from "react-router-dom";
import LoginPage from "../auth/pages/LoginPage";


const AppRouter = () => {

  const authStatus = 'not-authenticated';

  return (
   <Routes>
    {
      !authStatus === 'not-authenticated'
      ? <Route path='/auth/*' element={ <LoginPage /> } />
      : <Route path='/*' element={ <CalendarPage /> } />
    }
      <Route path='/*' element={ <Navigate to="/auth/login" /> } />
   </Routes>
  )
}
export default AppRouter