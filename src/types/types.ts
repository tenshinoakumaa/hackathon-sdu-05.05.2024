export interface Category {
  id: number;
  name: string;
  description: string;
  services: Service[];
}

export interface Service {
  id: number;
  name: string;
  description: string;
  duration: number;
  category_id: number;
}
