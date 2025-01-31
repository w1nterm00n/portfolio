function TimelineItem ({year, desc}) {
    return (
        <div className="TimelineWrapper">
            <div className="circle"></div>
            <p>{year} - {desc}</p>
        </div>
    );
  }

export default TimelineItem;