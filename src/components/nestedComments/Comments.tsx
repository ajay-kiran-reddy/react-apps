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
  onEdit: any;
}

const Comments = (props: CommentsProps) => {
  const { comments } = props;
  const [showNestedComments, setShowNestedComments] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [showTextArea, setShowTextArea] = useState(false);
  const [input, setInput] = useState("");
  const { addComment, editComment } = useComments();
  const [editInfo, setEditInfo]: any = useState({
    isEditing: false,
    comment: null,
  });

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

  const onEditComment = (comment: Comment) => {
    setActiveIndex(comment.id);
    setEditInfo({ isEditing: true, comment });
    setInput(comment.comment);
    setShowTextArea(true);
    props.onEdit(comment);
  };

  console.log(editInfo, "[editInfo]");

  const onCommentSubmit = (event: any) => {
    console.log("on submit");
    if (event.keyCode === 13) {
      if (editInfo?.isEditing) {
        const result = editComment(comments, input, editInfo?.comment?.id);
        setInput("");
        setEditInfo({ isEditing: false, comment: null });
        return result;
      } else {
        const result = addComment(comments, input, 0);
        setInput("");
        return result;
      }
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
                  <span className="count-badge">{cm.children.length}</span>
                  <span style={{ marginTop: "5px" }}>Comments</span>
                  <button
                    style={{ padding: "2px 6px", marginLeft: "1rem" }}
                    onClick={() => onEditComment(cm)}
                  >
                    Edit
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
                    return <Comments comments={[child]} onEdit={() => {}} />;
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
  const { addComment, editComment } = useComments();
  const [editInfo, setEditInfo]: any = useState({
    isEditing: false,
    comment: null,
  });

  const onCommentSubmit = (event: any) => {
    if (event.keyCode === 13) {
      if (editInfo?.isEditing) {
        const result = editComment(comments, input, editInfo.comment.id);
        setComments(result);
        setInput("");
        setEditInfo({ isEditing: false, comment: null });
      } else {
        const result = addComment(comments, input, 0);
        setComments(result);
        setInput("");
      }
    }
  };

  const onCommentEdit = (data: any) => {
    setEditInfo({ isEditing: true, comment: data });
    setInput(data.comment);
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
      <Comments comments={comments} onEdit={onCommentEdit} />
    </div>
  );
};

export default CommentsContainer;
