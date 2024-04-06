import { Indicator } from "@/types";

interface Response {
  id: string;
  trend: "up" | "down" | "forward";
  startDate: string;
  recommendationIndicator: Indicator;
  lastChanged: string;
  lastUpdated: string;
}

export default function useKeyData(commodityId: string): Response {
  return {
    id: commodityId,
    trend: "up",
    startDate: "25 Oct 2023",
    recommendationIndicator: 'plan',
    lastChanged: '25 Nov 2023',
    lastUpdated: '25 Nov 2023'
  };
}
