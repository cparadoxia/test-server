export type DateRange =
    | "daily"
    | "yesterday"
    | "week"
    | "month"
    | "3months"
    | "annual";

export type ExportType = "transactions" | "products";

export type ProductSalesSummary = {
    productId: number;
    name: string;
    totalQuantity: number;
    totalBuyAmount: number;
    totalSellAmount: number;
    profit: number;
    profitMargin: number;
};

export type Product = {
    id: number;
    name: string;
    code: string;
    description?: string;
    image?: string;
    buyPrice: number;
    sellPrice: number;
    stock: number;
    lowStockLevel?: number;
    expirationDate?: string;
    unitMeasurementsId?: number;
    clerkId: string;
};

export type Order = {
    id: number;
    productId: number;
    quantity: number;
    price: number;
    clerkId: string;
};

export type TransactionItem = {
    id: number;
    productId: number;
    productName: string;
    quantity: number;
    productSellPrice: number;
    productBuyPrice: number;
};

export type Transaction = {
    id: number;
    dateOfTransaction: string;
    totalPrice: number;
    paymentMethodId: number;
    status: string;
    cashReceived?: number;
    emailTo?: string;
    clerkId?: string;
    items: string;
    paymentMethodName?: string;
};

export type Product = {
    id: number;
    name: string;
    code: string;
    description?: string;
    image?: string;
    buyPrice: number;
    sellPrice: number;
    stock: number;
    lowStockLevel?: number;
    expirationDate?: string;
    unitMeasurementsId: number;
    clerkId: string;
};

export type ProductFormData = {
    id?: number;
    name: string;
    code: string;
    description?: string;
    image?: string;
    buyPrice: number;
    sellPrice: number;
    stock: number;
    lowStockLevel?: number;
    expirationDate?: string;
    unitMeasurementsId?: number;
    clerkId?: string;
};

export type UnitMeasurement = {
    id: number;
    name: string;
    symbol: string;
    clerkId: string;
};

export type PaymentMethod = {
    id: number;
    name: string;
    clerkId: string;
};
