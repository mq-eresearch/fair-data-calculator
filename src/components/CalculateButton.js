// import { generateText } from "./Utils";

const CalculateButton = ({ onHandleShowResults }) => {
  function handleCalculateClick() {
    // Here, we invoke the callback with the new value
    onHandleShowResults("results");
  }
  return (
    <div className="row py-5">
      <div className="d-grid gap-2 col-6 col-lg-3 mx-auto">
        <button
          id="generateTextBtn"
          className="btn btn-outline-danger btn-lg"
          type="button"
          // onClick={handleCalculateClick}
          onClick={() => {
            onHandleShowResults();
          }}
        >
          Calculate
        </button>
      </div>
    </div>
  );
};

export default CalculateButton;
