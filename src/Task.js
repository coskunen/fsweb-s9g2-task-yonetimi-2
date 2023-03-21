import React from "react";
import { formatDistanceToNow , differenceInDays } from 'date-fns'
import { tr } from 'date-fns/locale'

const Task = ({ taskObj, onComplete }) => {
const dateToNow = formatDistanceToNow(new Date(taskObj.deadline), {locale: tr});
const diffDays =  differenceInDays(new Date(taskObj.deadline), new Date())
const markAsRed = diffDays <= 3 ? true : false ;
return (
    <div className="task">
      <h3>{taskObj.title}</h3>
      <div className="deadline">son teslim: -{" "}
    
      <span className= {markAsRed ? "bg-orange-400":"bg-[#ffd9d4]" }>{dateToNow} - {diffDays}</span>
      </div>
      <p>{taskObj.description}
      </p>
      <div>
        {taskObj.people.map((p) => (
          <span className="pill" key={p}>{p}</span>
        ))}
      </div>
      {onComplete && <button onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>}
    </div>
  );
};

export default Task;
