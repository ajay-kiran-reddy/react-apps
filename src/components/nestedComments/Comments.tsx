import { useState } from "react";
import "./comments.css";
import data from "./mockData.json";
import { FaRegHeart } from "react-icons/fa";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import useComments from "./useComments";

export interface Comment {
  id: number;
  comment: string;
  children: any[];
  likes: number;
}
interface CommentsProps {
  comments: Comment[];
}

const Comments = (props: CommentsProps) => {
  const { comments } = props;
  const [showNestedComments, setShowNestedComments] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [showTextArea, setShowTextArea] = useState(false);
  const [input, setInput] = useState("");
  const { addComment } = useComments();

  const handleAccordion = (index: number) => {
    setShowNestedComments(!showNestedComments);
    setActiveIndex(index);
  };

  const onReply = (index: number) => {
    setShowTextArea(true);
    setActiveIndex(index);
  };

  const handleOnBlur = () => {
    setActiveIndex(-1);
    setShowNestedComments(false);
  };

  const onTextAreaChange = (value: string) => {
    setInput(value);
  };

  const onCommentSubmit = (event: any) => {
    if (event.keyCode === 13) {
      const result = addComment(comments, input, activeIndex);
      console.log(result, "[RESULT]");
      setInput("");
      setShowNestedComments(true);
      //   setActiveIndex(-1);
      return result;
    }
  };
  return (
    <div>
      <div className="comments-list">
        {comments?.map((cm) => {
          return (
            <div className="comment-container">
              <div className="comment">
                {cm.comment}

                {cm?.children?.length > 0 && (
                  <span
                    className="accordion"
                    onClick={() => handleAccordion(cm.id)}
                  >
                    {showNestedComments && cm.id === activeIndex ? (
                      <FaRegArrowAltCircleUp />
                    ) : (
                      <FaRegArrowAltCircleDown />
                    )}
                  </span>
                )}
              </div>

              <div>
                <div className="comment-actions">
                  <FaRegHeart cursor="pointer" />{" "}
                  <span className="likes">{cm.likes}</span>
                  <button
                    className="reply-button"
                    onClick={() => onReply(cm.id)}
                  >
                    Reply
                  </button>
                </div>

                <div style={{ margin: 5 }}>
                  {showTextArea && activeIndex === cm.id && (
                    <textarea
                      style={{ width: "100%", padding: 5 }}
                      placeholder="Enter your comment here ......."
                      onBlur={() => handleOnBlur()}
                      value={input}
                      onChange={(e) => onTextAreaChange(e?.target?.value)}
                      onKeyDown={onCommentSubmit}
                    />
                  )}
                </div>

                {showNestedComments &&
                  cm.id === activeIndex &&
                  cm?.children?.map((child) => {
                    return <Comments comments={[child]} />;
                  })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const CommentsContainer = () => {
  const [comments, setComments] = useState(data);
  const [input, setInput] = useState("");
  const { addComment } = useComments();

  const onCommentSubmit = (event: any) => {
    if (event.keyCode === 13) {
      const result = addComment(comments, input, 0);
      console.log(result, "[RESULT]");
      setComments(result);
      setInput("");
    }
  };

  return (
    <div className="comments-container">
      <label>Comments</label>
      <textarea
        placeholder="Enter your comment here ......."
        value={input}
        onChange={(e) => setInput(e?.target?.value)}
        onKeyDown={onCommentSubmit}
      />
      <Comments comments={comments} />
    </div>
  );
};

export default CommentsContainer;
