// One resume line-item: bold title + location on the first row,
// subtitle + italic date on the second, optional bullets underneath.
export default function Entry({ title, location, subtitle, date, bullets }) {
  return (
    <div className="entry">
      <div className="entry-row">
        <strong className="entry-title">{title}</strong>
        {location && <span className="entry-location">{location}</span>}
      </div>
      {(subtitle || date) && (
        <div className="entry-row">
          <span>{subtitle}</span>
          {date && <em className="entry-date">{date}</em>}
        </div>
      )}
      {bullets && bullets.length > 0 && (
        <ul>
          {bullets.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
