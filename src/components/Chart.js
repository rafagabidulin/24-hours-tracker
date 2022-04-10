import {
  Chart,
  ChartTitle,
  ChartLegend,
  ChartSeries,
  ChartSeriesItem,
  ChartSeriesLabels,
} from "@progress/kendo-react-charts";
import { COLORS } from "./constants.js";

// Graph data
const applicationsStatusThisMonth = [
  {
    status: "Работа",
    value: 29,
    color: COLORS.accepted,
  },
  {
    status: "Ужин",
    value: 14,
    color: COLORS.interviewing,
  },
  {
    status: "Дорога домой",
    value: 14,
    color: COLORS.rejected,
  },
  {
    status: "Бег",
    value: 14,
    color: COLORS.accepted,
  },
  {
    status: "Сон",
    value: 29,
    color: COLORS.pending,
  },
];
 
// Show category label for each item in the donut graph
const labelContent = e => e.category;
 
const Charts = props => {
  return (
    <Chart>
      <ChartTitle text="11 апреля" />
      <ChartLegend visible={false} />
      <ChartSeries>
        <ChartSeriesItem
          type="donut"
          data={applicationsStatusThisMonth}
          categoryField="status"
          field="value"
        >
          <ChartSeriesLabels
            color="#fff"
            background="none"
            content={labelContent}
          />
        </ChartSeriesItem>
      </ChartSeries>
    </Chart>
  );
};
 
export default Charts;