import { useEffect, useState } from "react";
import ApprovalCard from "./ApprovalCard";
import CommentDetail from "./CommentDetail";

function App() {
  const [comments, setComments] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      "http://localhost:3001/people?_start=0&_end=5"
    );
    const result = await response.json();
    setComments(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="ui container" style={{marginTop: '1rem'}}>
      <div className="ui cards">
        {comments.map(({ id, ...rest }) => (
          <ApprovalCard key={id}>
            <CommentDetail {...rest} />
          </ApprovalCard>
        ))}
      </div>
      <div className="ui container comments"></div>
    </div>
  );
}

export default App;
