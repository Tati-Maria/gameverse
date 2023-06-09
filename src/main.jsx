import React from 'react'
import ReactDOM from 'react-dom/client'
import '@splidejs/react-splide/css';
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route} from 'react-router-dom';
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query"
import { Toaster } from 'react-hot-toast';
import App from './App.jsx'
import './index.css'
import Home from './pages/Home.jsx'
import Games from './pages/Games.jsx';
import GameDetails from './pages/GameDetails.jsx';
import GenreDetails from './pages/GenreDetails.jsx';
import Developers from './pages/Developers.jsx';
import Platforms from './pages/Platforms.jsx';
import NotFound from './pages/Not-Found.jsx';
import CreatorDetail from './pages/CreatorDetail.jsx';
import Favorites from './pages/Favorites.jsx';
import DeveloperDetail from './pages/DeveloperDetail.jsx';
import PlatformDetail from './pages/PlatformDetail.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Home />} />
      <Route path='/favorites' element={<Favorites />} />
      <Route path='/games' element={<Games />} />
      <Route path='/games/:id' element={<GameDetails />} />
      <Route path='/genres/:slug' element={<GenreDetails />} />
      <Route path='/developers' element={<Developers />} />
      <Route path='/developers/:id' element={<DeveloperDetail />} />
      <Route path='/creators/:slug' element={<CreatorDetail />} />
      <Route path='/platforms' element={<Platforms />} />
      <Route path='/platforms/:slug' element={<PlatformDetail />} />
      <Route path='*' element={<NotFound />} />
    </Route>,
  )
)

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster />
    </QueryClientProvider>
  </React.StrictMode>,
)
