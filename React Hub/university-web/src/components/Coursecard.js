import './CourseCard.css';

function CourseCard({ title, code, credits }) {
  const getWorkloadClass = (credits) => {
    if (credits > 3) return 'heavy';
    if (credits === 3) return 'moderate';
    return '';
  };

  const getWorkloadText = (credits) => {
    if (credits > 3) return 'Heavy workload';
    if (credits === 3) return 'Moderate workload';
    return 'Light workload';
  };

  return (
    <div className="course-card">
      <h3>{title}</h3>
      <div className="course-card-code">{code}</div>
      <p><strong className="credits">{credits} Credits</strong></p>
      {credits > 3 && (
        <div className={`workload ${getWorkloadClass(credits)}`}>
          {getWorkloadText(credits)}
        </div>
      )}
    </div>
  );
}

export default CourseCard;
