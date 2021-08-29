import React from "react";

export const ScoreBar = () => {
  return (
    <div className="bg-white sticky-top mb-5">
      <div className="row pt-3 pb-4">
        <div className="offset-md-1 col-md-10">
          <div className="progress" style={{ height: "30px" }}>
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: "2%" }}
              aria-valuenow="15"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              Findable
            </div>
            <div
              className="progress-bar bg-success"
              role="progressbar"
              style={{ width: "3%" }}
              aria-valuenow="30"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              Accessible
            </div>
            <div
              className="progress-bar bg-info"
              role="progressbar"
              style={{ width: "50%" }}
              aria-valuenow="20"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              Interoperable
            </div>
            <div
              className="progress-bar bg-warning"
              role="progressbar"
              // style="width: 20%"
              style={{ width: "10%" }}
              aria-valuenow="20"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              reusable
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
