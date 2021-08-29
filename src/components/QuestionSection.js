import QuestionBlock from "./QuestionBlock";

const QuestionSection = ({
  answers,
  questionSection,
  onHandleShowHelp,
  onHandleChangeAnswer,
}) => {
  return (
    <div className="pb-3">
      <div className="row border-bottom">
        <div className="col">
          <p className="fs-3">{questionSection.title}</p>
        </div>
      </div>

      <div className="row pt-4">
        <div className="col-lg-4">
          <p className="fst-italic">{questionSection.help}</p>
        </div>

        <div className="offset-lg-1 col-lg-7">
          {questionSection.questionBlock.map((questionBlock) => (
            <QuestionBlock
              key={questionBlock.id}
              answers={answers}
              questionBlock={questionBlock}
              onHandleShowHelp={onHandleShowHelp}
              onHandleChangeAnswer={onHandleChangeAnswer}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionSection;
