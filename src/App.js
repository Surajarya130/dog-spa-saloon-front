import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
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
