import { useDispatch, useSelector } from "react-redux"
import Login from "./components/Login/Login"
import c from './App.module.scss'
import Article from "./components/Article/Article"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { useEffect } from "react";
import { initializeRequre } from "./redux/reducers/appReducer";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Article />,
  },
  {
    path: "/login",
    element: <Login />,
  },

]);
const App = () => {
  const dispatch = useDispatch()
  const init = useSelector(store => store?.appReducer?.initialize)
  useEffect(() => {
    dispatch(initializeRequre())
  }, [init]);
  return init ?
    (
      <div className={c.App}>
        <RouterProvider router={router} />
      </div>
    ) : 'Loading'
}

export default App