import dummyQuotes from "../components/data/dummyQuotes";
import QuoteList from "../components/quotes/QuoteList";
const AllQuotes = () => {
  return <QuoteList quotes={dummyQuotes} />;
};
export default AllQuotes;
