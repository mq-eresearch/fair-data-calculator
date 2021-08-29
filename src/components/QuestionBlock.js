import Form from "react-bootstrap/Form";
import { InfoCircle } from "react-bootstrap-icons";

const QuestionBlock = ({
  questionBlock,
  answers,
  onHandleShowHelp,
  onHandleChangeAnswer,
}) => {
  function handleShowHelp(text) {
    onHandleShowHelp(text);
  }

  function handleChangeAnswer(id, value, rating) {
    onHandleChangeAnswer(id, value, rating);
  }

  return (
    <div className="py-2">
      <Form.Group controlId={questionBlock.id}>
        <Form.Label>
          {questionBlock.question}{" "}
          <span
            onClick={() => {
              handleShowHelp(questionBlock.help);
            }}
          >
            <InfoCircle />
          </span>
        </Form.Label>

        <Form.Control
          as="select"
          value={answers.find((answer) => answer.id === questionBlock.id).value}
          onChange={(e) => {
            handleChangeAnswer(
              e.target.id,
              e.target[e.target.selectedIndex].getAttribute("value"),
              e.target[e.target.selectedIndex].getAttribute("data-rating")
            );
          }}
        >
          {questionBlock.answers.map((answer) => (
            <option
              key={answer.id}
              data-id={answer.id}
              data-rating={answer.dataRating}
              value={answer.answerText}
            >
              {answer.answerText}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
    </div>
  );
};

export default QuestionBlock;
