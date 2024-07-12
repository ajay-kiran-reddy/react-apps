import "./card.css";

interface CardProps {
  title: string;
  body: any;
  actions: any;
}

const Card = (props: CardProps) => {
  const { title, body, actions } = props;
  return (
    <div className="card">
      <div className="header">{title}</div>
      <div className="body">{body}</div>
      <div className="footer">{actions}</div>
    </div>
  );
};

export default Card;
