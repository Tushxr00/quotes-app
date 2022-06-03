import { Navigate, Route, Routes } from "react-router-dom"
import AllQuotes from "./Pages/AllQuotes";
import NewQuote from "./Pages/NewQuote";
import QuoteDetals from"./Pages/QuoteDetail"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/quotes" />}/>
        <Route path="/quotes" element={<AllQuotes/>} />
        <Route path="/quotes/:quoteId/*" element={<QuoteDetals/>}/>
        <Route path="/new-quote" element={<NewQuote/>}/>
      </Routes>
    </div>
  );
}

export default App;
