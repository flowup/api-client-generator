/* tslint:disable */

export interface Order {
  complete?: boolean;
  id?: number;
  petId?: number;
  quantity?: number;
  shipDate?: string;
  status?: ('placed' | 'approved' | 'delivered');  // Order Status
}
