import { Fragment } from "react";
import { Route, Routes, useParams } from "react-router-dom";

const QipteDetails = () => {
  const params = useParams();

  return (
    <Fragment>
      <h1>Qipte Details</h1>
      <p>{params.quoteId}</p>
      <Routes>
        <Route
          path="comments"
          element={
            <Fragment>
              <p> See The comments</p>
            </Fragment>
          }
        />
      </Routes>
    </Fragment>
  );
};
export default QipteDetails;
