import React from 'react'
import ReactDOM from 'react-dom/client'
import '@splidejs/react-splide/css';
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route} from 'react-router-dom';
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query"
import App from './App.jsx'
import './index.css'
import Home from './pages/Home.jsx'
import Games from './pages/Games.jsx';
import GameDetails from './pages/GameDetails.jsx';
import GenreDetails from './pages/GenreDetails.jsx';
import Developers from './pages/Developers.jsx';
import Platforms from './pages/Platforms.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Home />} />
      <Route path='/games' element={<Games />} />
      <Route path='/games/:id' element={<GameDetails />} />
      <Route path='/genres' element={<h1>Hello</h1>} />
      <Route path='/genres/:slug' element={<GenreDetails />} />
      <Route path='/developers' element={<Developers />} />
      <Route path='/platforms' element={<Platforms />} />
      <Route path='*' element={<h1>Not Found</h1>} />
    </Route>,
  )
)

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
