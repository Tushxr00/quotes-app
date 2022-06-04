import { Fragment } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
import dummyQuotes from "../components/data/dummyQuotes";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const QuoteDetail = () => {
  const params = useParams();
  const quote = dummyQuotes.find((quote) => quote.id === params.quoteId);
  if (!quote) {
    return <p>no Quoute found!</p>;
  }
  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Routes>
        <Route path="comments" element={<Comments />} />
      </Routes>
    </Fragment>
  );
};
export default QuoteDetail;
