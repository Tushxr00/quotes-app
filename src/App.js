import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import dummyQuotes from "./components/data/dummyQuotes";
import Layout from "./components/layout/Layout";
import { addQuote } from "./lib/api";
import AllQuotes from "./Pages/AllQuotes";
import NewQuote from "./Pages/NewQuote";
import NotFound from "./Pages/NotFound";
import QuoteDetals from "./Pages/QuoteDetail";
import useHttp from "./hooks/use-http";

function App() {
  /**
   * code to send dummy data in firebase
   */
  // const { sendRequest, status } = useHttp(addQuote);
  // console.log(dummyQuotes.length);
  // useEffect(() => {
  //   for (let i = 0; i < dummyQuotes.length; i++)
  //     sendRequest({
  //       text: dummyQuotes[i].text,
  //       author: dummyQuotes[i].author,
  //     });
  // }, []);
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/quotes" />} />
        <Route path="/quotes" element={<AllQuotes />} />
        <Route path="/quotes/:quoteId/*" element={<QuoteDetals />} />
        <Route path="/new-quote" element={<NewQuote />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
