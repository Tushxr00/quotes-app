import { Fragment, useEffect } from "react";
import { Link, Route, Routes, useLocation, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
import dummyQuotes from "../components/data/dummyQuotes";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

const QuoteDetail = () => {
  const params = useParams();
  // const quote = dummyQuotes.find((quote) => quote.id === params.quoteId);

  const { quoteId } = params;
  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered ">{error}</p>;
  }
  if (!loadedQuote) {
    return <p>no Quoute found!</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Routes>
        <Route
          path=""
          element={
            <div className="centered">
              <Link
                to={`/quotes/${params.quoteId}/comments`}
                className="btn--flat"
              >
                Load comments
              </Link>
            </div>
          }
        />
        <Route path="comments" element={<Comments />} />
      </Routes>
    </Fragment>
  );
};
export default QuoteDetail;
