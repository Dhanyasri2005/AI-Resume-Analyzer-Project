import ResultCard from "./ResultCard";

function Dashboard({ result }) {
  if (!result) {
    return <div>No analysis available</div>;
  }

  return (
    <div className="dashboard">
      <ResultCard
  title="Match Score"
  value={
    <div className="score">
      {result?.matchScore || 0}%
    </div>
  }
/>

      <ResultCard
        title="Missing Skills"
        value={
          result?.missingSkills?.join(", ") ||
          "No missing skills"
        }
      />

   <ResultCard
  title="Suggestions"
  value={
    <ul>
      {result?.suggestions?.slice(0,5).map((item,index)=>(
        <li key={index}>{item}</li>
      ))}
    </ul>
  }
/>

<ResultCard
  title="Interview Questions"
  value={
    <ul>
      {result?.interviewQuestions?.slice(0,5).map((item,index)=>(
        <li key={index}>{item}</li>
      ))}
    </ul>
  }
/>
</div>
  );
}

export default Dashboard;