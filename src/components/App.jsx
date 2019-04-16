import React from 'react';
import ScheduleList from './ScheduleList';
import SeasonalList from './SeasonalList';

function App(){
  return (
    <div>
      <style jsx>{`
          div {
                text-align: center;
          }
          `}</style>
      <ScheduleList/>
      <SeasonalList/>
    </div>
  );
}

export default App;
