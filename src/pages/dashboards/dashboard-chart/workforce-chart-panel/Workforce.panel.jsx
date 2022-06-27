import { workforceReport } from "data";

import { ChartPanel } from "../chart-panels";
import { useChart } from "../hooks";

import { renderChart } from "./Workforce.renderer";

export const WorkforceChartPanel = () => {
  const { isLoading, chart, alert } = useChart(workforceReport, renderChart);

  return (
    <ChartPanel
      alert={alert}
      chart={chart}
      isLoading={isLoading}
      title="Care Members"
      subTitle="Last 7 months"
    />
  );
};