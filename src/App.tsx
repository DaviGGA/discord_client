import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Toaster } from "@/components/ui/sonner"

type ToasterProps = React.ComponentProps<typeof Toaster>;

type RouterObject = {
  element: any,
  path: string
}

const routes: RouterObject[] = [
  { element: <Login/>, path: "/login" },
  { element: <Register/>, path: "/signup" }
]

function App() {

  return (
    <>
      <Router>
        <Routes>
          {
            routes.map((route: RouterObject,idx: number) =>
              <Route
                key={idx}
                path={route.path}
                element={route.element}
              />               
            )
          }
        </Routes>
      </Router>
      <Toaster closeButton/>
    </>
  )
}

export default App
