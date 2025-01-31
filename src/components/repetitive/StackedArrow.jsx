import { useEffect, useState } from "react";

function StackedArrow() {
  const [arrowClasses, setArrowClasses] = useState(["arrow1", "arrow2", "arrow3", "arrow4"]);

  useEffect(() => {
    const interval = setInterval(() => {
      setArrowClasses((prev) => {
        return [prev[3], prev[0], prev[1], prev[2]]; // Меняем порядок классов
      });
    }, 800); // Интервал 2 секунды

    return () => clearInterval(interval); // Очищаем интервал при размонтировании компонента
  }, []);

  return (
    <div className="stackedArrow">
      <div className="arrow-container">
        {arrowClasses.map((className, index) => (
          <div key={index} className={`arrow ${className}`}>
            <div className="right"></div>
            <div className="left"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StackedArrow;