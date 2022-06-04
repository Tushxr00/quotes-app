import { Fragment } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";

const QipteDetails = () => {
  const params = useParams();

  return (
    <Fragment>
      <h1>Qipte Details</h1>
      <p>{params.quoteId}</p>
      <Routes>
        <Route path="comments" element={<Comments />} />
      </Routes>
    </Fragment>
  );
};
export default QipteDetails;
