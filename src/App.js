import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// Same as react main file structure, stored the UI pages also in such fashion.
import { 
  SearchByDate,
  WaitList,
  CheckOutPage,
  Dashboard,
  QuickView,
  AddPup,
  SearchByName
} from './pages';


function App() {
  return (
    <>
    <BrowserRouter>
    {/* Dashboard and it's inner page, React Router V6 used */}
      <Routes>
        <Route path="/" element={<Dashboard />} >
          <Route path='/' element={<QuickView />} />
          <Route path='/addpuppy' element={<AddPup />} />
          <Route path='/quickview' element={<QuickView />} />
          <Route path='/checkout' element={<CheckOutPage />} />
          <Route path='/waitinglist' element={<WaitList />} />
          <Route path='/searchbydate' element={<SearchByDate />} />
          <Route path='/searchbyname' element={<SearchByName />} />
        </Route>
      </Routes> 
    </BrowserRouter>
    </>
  );
}

export default App;
