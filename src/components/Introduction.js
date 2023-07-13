const Introduction = () => {
  return (
    <>
      <div className="row pt-5">
        <div className="col">
          <div className="display-6 text-center">
            FAIR Data Assessment Calculator
          </div>
        </div>
      </div>

      <div className="row pt-3 pb-4">
        <div className="col">
          <p className="fs-5">
            This FAIR data assessment calculator (ported from the{" "}
            <a
              href="https://ardc.edu.au/resources/working-with-data/fair-data/fair-self-assessment-tool/"
              target="_blank"
              rel="noreferrer"
              className="link-dark"
            >
              <span className="fst-italic">ARDC FAIR Assessment tool</span>
            </a>
            ) allows you to rate your dataset for{" "}
            <a
              href="https://www.go-fair.org/fair-principles/"
              target="_blank"
              rel="noreferrer"
              className="link-dark"
            >
              {" "}
              <span className="fst-italic">FAIRness</span>{" "}
            </a>
            in advance of uploading it into the{" "}
            <a
              href="https://figshare.mq.edu.au/data"
              target="_blank"
              rel="noreferrer"
              className="link-dark"
            >
              <span className="fst-italic">
                Macquarie University Research Data Repository
              </span>
            </a>
            . For further information, see{" "}
            <a
              href="https://libguides.mq.edu.au/research_data_repository"
              target="_blank"
              rel="noreferrer"
              className="link-dark"
            >
              <span className="fst-italic">here</span>
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
};

export default Introduction;
