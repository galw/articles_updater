export default function Article(props) {
  return (
    <div className="article">
      <div>{props.title}</div>
      <div>{props.message}</div>
    </div>
  );
}
