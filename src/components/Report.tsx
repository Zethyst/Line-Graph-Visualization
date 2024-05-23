import React, { useEffect, useRef,useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import Papa from 'papaparse';

export interface ReportProps {
  setYears: React.Dispatch<React.SetStateAction<number[]>>;
  setTotalJobs: React.Dispatch<React.SetStateAction<number[]>>;
  setSalary: React.Dispatch<React.SetStateAction<string[]>>;
}

interface YearStats {
  year: number;
  totalJobs: number;
  avgSalaryUSD: string; 
}
interface JobStats {
  title: string;
  number: number;
}

interface Job {
  work_year: number;
  experience_level: string;
  employment_type: string;
  job_title: string;
  salary: number;
  salary_currency: string;
  salary_in_usd: number;
  employee_residence: string;
  remote_ratio: number;
  company_location: string;
  company_size: string;
}


const Report: React.FC<ReportProps> = ({setYears, setTotalJobs, setSalary}) => {
  
  const [pending, setPending] = React.useState(true);
  const [hidden, setHidden] = React.useState(true);
  const [Year, setYear] = React.useState(0);
  
  const [jobs, setJobs] = useState<Job[]>([]);
  const [yearStats, setYearStats] = useState<YearStats[]>([]);
  const [titles, setTitles] = React.useState<JobStats[]>([]);

  useEffect(() => {
    const fetchCsv = async () => {
      const response = await fetch('/Line-Graph-Visualization/salaries.csv');
      const reader = response.body?.getReader();
      const result = await reader?.read();
      const decoder = new TextDecoder('utf-8');
      const csv = decoder.decode(result?.value);
      console.log(csv);
      
      Papa.parse<Job>(csv, {
        header: true,
        dynamicTyping: true,
        complete: (results:any) => {
          setJobs(results.data);
        },
      });
    };
    
    fetchCsv();
  }, []);

  useEffect(() => {
    if (jobs.length > 0) {
      const statsByYear = jobs.reduce((acc: { [key: number]: YearStats }, job) => {
        if (!acc[job.work_year]) {
          acc[job.work_year] = { year: job.work_year, totalJobs: 0, avgSalaryUSD: '0' };
        }
        acc[job.work_year].totalJobs += 1;
        acc[job.work_year].avgSalaryUSD = (
          parseFloat(acc[job.work_year].avgSalaryUSD) + job.salary_in_usd
        ).toString();
        return acc;
      }, {});

      const calculatedStats = Object.values(statsByYear).map((stat) => ({
        ...stat,
        avgSalaryUSD: (parseFloat(stat.avgSalaryUSD) / stat.totalJobs).toFixed(2),
      }));

      setPending(false)
      const updatedStats = calculatedStats.slice(0, -1);

      setYearStats(updatedStats);
    }
  }, [jobs]);

  useEffect(() => {
    const years = yearStats.map(stat => stat.year);
    const jobs = yearStats.map(stat => stat.totalJobs);
    const salaries = yearStats.map(stat => stat.avgSalaryUSD);
  
    setYears(years);
    setTotalJobs(jobs);
    setSalary(salaries);
  }, [yearStats]);


  const firstcolumns: TableColumn<YearStats>[] = [
    {
      name: "Year",
      selector: (row: YearStats) => row.year,
      sortable:true
    },
    {
      name: "Total Jobs",
      selector: (row: YearStats) => row.totalJobs,
      sortable: true,
    },
    {
      name: "Average Salary in USD",
      selector: (row: YearStats) => row.avgSalaryUSD,
      sortable: true,
    },
  ];

  const secondcolumns: TableColumn<JobStats>[] = [
    {
      name: "Job Title",
      selector: (row: JobStats) => row.title,
    },
    {
      name: `Number of Times Appeared (${Year})`,
      selector: (row: JobStats) => row.number,
      sortable: true,
    },
  ];

  const customStyles = {
    header: {
      style: {
      }
    },
    headCells: {
      style: {
        fontSize: '12px',
        background: "#F1F1F1",
        padding: '10px',
      },
    },
  };

  const SecondTableCreation = (jobs: Job[], year: number) => {
    const filteredJobs = jobs.filter(job => job.work_year === year);
    const jobTitles: { [key: string]: number } = {};
  
    filteredJobs.forEach(job => {
      if (jobTitles[job.job_title]) {
        jobTitles[job.job_title]++;
      } else {
        jobTitles[job.job_title] = 1;
      }
    });
    const titlesArray = Object.entries(jobTitles).map(([title, number]) => ({ title, number }));
    setTitles(titlesArray);
    return jobTitles;
  };
  
  return (
    <div className="py-5 px-5 my-5 bg-white shadow-md mx-auto w-[80%] translate-x-36 rounded-2xl flex gap-5 flex-col justify-end items-center">
      <DataTable
        columns={firstcolumns}
        data={yearStats}
        title="Main Table"
        progressPending={pending}
        customStyles={customStyles}
        fixedHeader
        highlightOnHover
        dense
        onRowClicked={(row, event) => {
          setHidden(false);
          setYear(row.year)
          SecondTableCreation(jobs, row.year);
        }}
      />
      <div className={`${hidden?"hidden":"visible w-full"}`}>

      <DataTable
        columns={secondcolumns}
        data={titles}
        title="Second Table"
        progressPending={pending}
        customStyles={customStyles}
        fixedHeader
        highlightOnHover
        dense
        />
        </div>
    </div>
  );
}

export default Report;