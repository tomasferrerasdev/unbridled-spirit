export interface DashboardSummaryResponse {
  numberOfOrders: number;
  paidOrders: number;
  numberOfClients: number;
  numberOfProducts: number;
  noStockProducts: number;
  lowStockProducts: number;
  unpaidOrders: number;
}
