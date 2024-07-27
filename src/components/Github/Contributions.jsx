

import GitHubCalendar from "react-github-calendar";

const Contributions = () => {
  return (
    <div className="w-full h-full mb-20 text-white">
      <div className="flex items-center justify-center">
        <GitHubCalendar
          username="Tajbir23"
          showWeekdayLabels
          labels={{
            totalCount: '{{count}} contributions in the last half year'
          }}
          
        />
      </div>
    </div>
  );
};

export default Contributions;
