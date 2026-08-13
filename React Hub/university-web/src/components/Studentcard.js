import './StudentCard.css';

function StudentCard({ name, studentID, major }) {
  const handleViewDetails = () => {
    alert(`Viewing ${name}'s profile`);
  };

  return (
    <div className="student-card">
      <h3>{name}</h3>
      <p><strong>Student ID:</strong> {studentID}</p>
      <p><strong>Major:</strong> {major}</p>
      <button onClick={handleViewDetails}>View Details</button>
    </div>
  );
}

export default StudentCard;