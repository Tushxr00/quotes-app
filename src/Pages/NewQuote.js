import { useNavigate } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
  const navigation = useNavigate();

  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
    navigation("/quotes");
  };
  return <QuoteForm onAddQuote={addQuoteHandler} />;
};
export default NewQuote;
