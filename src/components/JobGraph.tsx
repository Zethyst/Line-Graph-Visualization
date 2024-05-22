import Chart from 'react-apexcharts'

interface LineGraphProps {
  years: number[];
  totaljobs: number[];
  salary: string[];
}

function JobGraph(props: LineGraphProps) {
  return (
    <>  
        <div className='w-96 mx-auto'>
            <Chart 
                type='line' 
                height={450} 
                width={449} 
                series={[{
                  name: "Total Jobs by Year",
                  data: props.totaljobs
                }]} 
                options={{
                    dataLabels: {
                      enabled: false,
                    },
                    stroke: {
                      curve: 'straight'
                    },
                    title: {
                      text: 'Total Jobs by Year',
                      align: 'left'
                    },
                    grid: {
                      row: {
                        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
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
