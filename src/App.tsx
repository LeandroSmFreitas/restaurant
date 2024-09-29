import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path={'/'} element={<AppRoutes/>}/>
          </Routes>
      </BrowserRouter>
      <ToastContainer
        draggable
        rtl={false}
        closeOnClick
        pauseOnHover
        autoClose={5000}
        newestOnTop={false}
        className={'toast-wrapper'}
        position={"top-right"}
      />
    </>
  )
}

export default App
