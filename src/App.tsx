import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import { ToastContainer } from 'react-toastify'
import { SpeedInsights } from '@vercel/speed-insights/react';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTheme } from './store/theme/reducer';
import { AppDispatch, useAppSelector } from './store/store';
import { ThemeProvider } from 'styled-components';
import { ClipLoader } from 'react-spinners';

function App() {
  const dispatch: AppDispatch = useDispatch();
  const theme = useAppSelector((state) => state.theme);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTheme = async () => {
      await dispatch(fetchTheme());
      setLoading(false);
    };
    
    loadTheme();
  }, [dispatch]);

  if (loading) {
    return <ClipLoader color="#4f372f" loading={true} size={50} />;
  }


  return (
    <ThemeProvider theme={theme}>
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
      <SpeedInsights/>
    </ThemeProvider>
  )
}

export default App
