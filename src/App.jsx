import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {createRoot} from 'react-dom/client';
// import Pet from './Pet';
import Search from './search';
import Details from './Details';
import AdoptedPetContext from './AdoptedPetContext';
import { Provider } from 'react-redux';
import store from './store'; 

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  // const [adoptedPet, setAdoptedPet] = useState(null);  we used it in context
  //console.log(adoptedPet);

  return (
    <BrowserRouter>
    <Provider store={store}>
    <QueryClientProvider client={queryClient}>
        <header>
          <Link to="/">About Me!!</Link>
        </header>

        {/* <AdoptedPetContext.Provider value={{ adoptedPet, setAdoptedPet }}> */}
        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<Search />} />
        </Routes>
        {/* </AdoptedPetContext.Provider> */}
      </QueryClientProvider>
    </Provider>
      
    </BrowserRouter>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
