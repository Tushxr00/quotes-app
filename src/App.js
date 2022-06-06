import React, { Suspense, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import dummyQuotes from "./components/data/dummyQuotes";
import Layout from "./components/layout/Layout";
import { addQuote } from "./lib/api";
import useHttp from "./hooks/use-http";
import LoadingSpinner from "./components/UI/LoadingSpinner";
/**
 * normal import statement
 */
// import AllQuotes from "./Pages/AllQuotes";
// import NewQuote from "./Pages/NewQuote";
// import NotFound from "./Pages/NotFound";
// import QuoteDetals from "./Pages/QuoteDetail";

/**
 * lazy loading the components to improve the performance
 */
const NewQuote = React.lazy(() => import('./Pages/NewQuote'))
const AllQuotes = React.lazy(() => import("./Pages/AllQuotes"))
const NotFound = React.lazy(() => import("./Pages/NotFound"))
const QuoteDetals = React.lazy(() => import("./Pages/QuoteDetail"))

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
      <Suspense fallback={
        <div className="centered">
          <LoadingSpinner/>
        </div>
      }>
        <Routes>
          <Route path="/" element={<Navigate to="/quotes" />} />
          <Route path="/quotes" element={<AllQuotes />} />
          <Route path="/quotes/:quoteId/*" element={<QuoteDetals />} />
          <Route path="/new-quote" element={<NewQuote />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
