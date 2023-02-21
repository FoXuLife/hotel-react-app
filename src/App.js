import { useSelector } from "react-redux"
import Login from "./components/Login/Login"
import c from './App.module.scss'
import Article from "./components/Article/Article"
const App = () => {
  //const store = useSelector(store => store)
  return (
    <div className={c.App}>
      <Login />
    </div>)
}
export default App