import { useState } from 'react'
import LineGraph from './LineGraphAnalysis'
import Report, { ReportProps } from './Report'

function Dashboard() {

  const [years, setYears] = useState<number[]>([]);
  const [totaljobs, setTotalJobs] = useState<number[]>([]);
  const [salary, setSalary] = useState<string[]>([]);

  return (
    <>
      <Report setYears={setYears} setTotalJobs={setTotalJobs} setSalary={setSalary} />
      <LineGraph years={years} totaljobs={totaljobs} salary={salary}/>
    </>
  )
}

export default Dashboard