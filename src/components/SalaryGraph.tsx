import Chart from 'react-apexcharts'
interface LineGraphProps {
    years: number[];
    totaljobs: number[];
    salary: string[];
  }
  
  function JobGraph(props: LineGraphProps) {
    const salaryNumbers = props.salary.map((salary) => parseFloat(salary));
  
    return (
      <>  
          <div className='w-96 mx-auto'>
              <Chart 
                  type='line' 
                  height={450} 
                  width={449} 
                  series={[{
                    name: "Average Salary by Year",
                    data: salaryNumbers
                  }]} 
                  options={{
                      dataLabels: {
                        enabled: false,
                      },
                      stroke: {
                        curve: 'straight',
                        colors:['#65B741']
                      },
                      title: {
                        text: 'Average Salary by Year',
                        align: 'left'
                      },
                      grid: {
                        row: {
                          colors: ['#f3f3f3', 'transparent'],
                          opacity: 0.5
                        },
                      },
                      xaxis: {
                        categories: props.years,
                      }
                  }}
              />
          </div>
      </>
    )
  }
  
  export default JobGraph
  