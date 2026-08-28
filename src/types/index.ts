export interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
  attachments?: {
    name: string;
    url?: string;
    type: string;
    base64?: string;
  }[];
  quickActions?: {
    label: string;
    prompt: string;
  }[];
}

export interface LeadData {
  name?: string;
  phone?: string;
  propertyType?: 'Residencial' | 'Comercial' | 'Industrial' | 'Rural';
  monthlyBill?: number;
  city?: string;
  kwh?: number;
}
