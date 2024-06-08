import { LineChart } from '@mui/x-charts/LineChart';

interface BasicLineChartProps {
    caption: string;
    data: number[];
    xAxis: Date[];
}

function BasicLineChart ({caption, data, xAxis }: BasicLineChartProps) {

    return (
        <LineChart
            xAxis={[
                {
                    data: xAxis,
                    label: "Date",
                    scaleType: "time",
                    valueFormatter: (date) => date.toLocaleDateString(),
                }
            ]}
            series={[
                {
                data: data,
                label: caption,
                },
            ]}
            width={500}
            height={300}
        />
    );
}

export default BasicLineChart;