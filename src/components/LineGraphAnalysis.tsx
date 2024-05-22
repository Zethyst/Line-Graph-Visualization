
import Job_Graph from "./JobGraph";
import Salary_Graph from "./SalaryGraph";

interface LineGraphProps {
  years: number[];
  totaljobs: number[];
  salary: string[];
}

function LineGraph(props: LineGraphProps) {
  return (
    <div className="p-10 bg-white w-[76%] shadow-md mx-10 absolute right-0 rounded-2xl s">
      <div className="titleBar text-[#353535e0] flex justify-center items-center px-5">
        <p className="text-2xl font-bold text-[#353535] pb-5">Line Graph Analysis</p>
      </div>
      <div className="flex justify-center items-center gap-12 mt-3">
        <Job_Graph years={props.years} totaljobs={props.totaljobs} salary={props.salary}/>
        <Salary_Graph years={props.years} totaljobs={props.totaljobs} salary={props.salary} />

      </div>
    </div>
  );
}

export default LineGraph;
