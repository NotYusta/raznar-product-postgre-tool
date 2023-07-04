export interface Product {
  slug: string;
  series?: number;
  data: {} | string | BasicData;
  price: number;
}

export interface BasicData {
  core: number;
  ram: number;
  storage: number;
  database?: number;
  bandwidth?: number;
}

export const AdvancedVPS: Product[] = [
  {
    slug: "VPS-AD8",
    data: {
      core: 2,
      ram: 8,
      storage: 100,
      bandwidth: 1000,
    },
    price: 350000,
  },
  {
    slug: "VPS-AD12",
    data: {
      core: 3,
      ram: 12,
      storage: 150,
      bandwidth: 2000,
    },
    price: 530000,
  },
  {
    slug: "VPS-AD16",
    data: {
      core: 4,
      ram: 16,
      storage: 200,
      bandwidth: 3000,
    },
    price: 700000,
  },
  {
    slug: "VPS-AD24",
    data: {
      core: 4,
      ram: 24,
      storage: 250,
      bandwidth: 4000,
    },
    price: 1000000,
  },
  // Add the remaining plans here
  {
    slug: "VPS-AD32",
    data: {
      core: 6,
      ram: 32,
      storage: 400,
      bandwidth: 6000,
    },
    price: 1400000,
  },
  {
    slug: "VPS-AD48",
    data: {
      core: 6,
      ram: 48,
      storage: 500,
      bandwidth: 8000,
    },
    price: 1950000,
  },
  {
    slug: "VPS-AD64",
    data: {
      core: 8,
      ram: 64,
      storage: 0,
      bandwidth: 10000,
    },
    price: 2500000,
  },
];


export const GeneralMinecraft: Product[] = [
  {
    slug: "MC-G2",
    data: {
      core: 2,
      ram: 2,
      storage: 10,
      database: 1,
    },
    price: 35000,
  },
  {
    slug: "MC-G4",
    data: {
      core: 2,
      ram: 4,
      storage: 25,
      database: 1,
    },
    price: 70000,
  },
  {
    slug: "MC-G6",
    data: {
      core: 2,
      ram: 6,
      storage: 25,
      database: 1,
    },
    price: 100000,
  },
  {
    slug: "MC-G8",
    data: {
      core: 3,
      ram: 8,
      storage: 50,
      database: 2,
    },
    price: 130000,
  },
  {
    slug: "MC-G12",
    data: {
      core: 3,
      ram: 12,
      storage: 70,
      database: 3,
    },
    price: 195000,
  },
  {
    slug: "MC-G16",
    data: {
      core: 3,
      ram: 16,
      storage: 85,
      database: 3,
    },
    price: 260000,
  },
];

export const AdvancedMinecraft: Product[] = [
  {
    slug: "MC-AD8",
    data: {
      core: 2,
      ram: 8,
      storage: 85,
      database: -1,
    },
    price: 385000,
  },
  {
    slug: "MC-AD12",
    data: {
      core: 3,
      ram: 12,
      storage: 130,
      database: -1,
    },
    price: 575000,
  },
  {
    slug: "MC-AD16",
    data: {
      core: 4,
      ram: 16,
      storage: 185,
      database: -1,
    },
    price: 750000,
  },
  {
    slug: "MC-AD24",
    data: {
      core: 4,
      ram: 24,
      storage: 235,
      database: -1,
    },
    price: 1050000,
  },
];

export const KabyMinecraft: Product[] = [
  // Existing plans...

  {
    slug: "MC-KL8",
    data: {
      core: 2,
      ram: 8,
      storage: 70,
      database: -1,
    },
    price: 275000,
  },
  {
    slug: "MC-KL12",
    data: {
      core: 3,
      ram: 12,
      storage: 100,
      database: -1,
    },
    price: 325000,
  },
  {
    slug: "MC-KL16",
    data: {
      core: 4,
      ram: 16,
      storage: 120,
      database: -1,
    },
    price: 600000,
  },
  {
    slug: "MC-KL24",
    data: {
      core: 4,
      ram: 24,
      storage: 150,
      database: -1,
    },
    price: 850000,
  },
];


export const GeneralProxyMinecraft: Product[] = [
  // Existing plans...

  {
    slug: "MC-GPX256",
    data: {
      core: 1,
      ram: 256,
      storage: 5,
    },
    price: 25000,
  },
  {
    slug: "MC-GPX512",
    data: {
      core: 1,
      ram: 512,
      storage: 10,
    },
    price: 60000,
  },
  {
    slug: "MC-GPX1024",
    data: {
      core: 1,
      ram: 1024,
      storage: 20,
    },
    price: 110000,
  },
  {
    slug: "MC-GPX2048",
    data: {
      core: 2,
      ram: 2048,
      storage: 20,
    },
    price: 150000,
  },
  {
    slug: "MC-GPX6192",
    data: {
      core: 4,
      ram: 6192,
      storage: 40,
      setupFee: 0.32, // 32% setup fee
    },
    price: 285000,
  },
];

export const TurboProxyMinecraft: Product[] = [
  // Existing plans...

  {
    slug: "MC-TPX2048",
    data: {
      core: 1,
      ram: 2048,
      storage: 20,
      bandwidth: 1000,
    },
    price: 150000,
  },
  {
    slug: "MC-TPX4096",
    data: {
      core: 2,
      ram: 4096,
      storage: 40,
      bandwidth: 2000,
    },
    price: 250000,
  },
];

export const AdvancedFiveM: Product[] = [
  // Existing plans...

  {
    slug: "FiveM-AD48",
    data: {
      core: 0, // No CPU core information provided
      ram: 0, // No RAM information provided
      storage: 55, // No storage information provided
      database: -1,
      playerSlots: 48,
    },
    price: 525000,
  },
  {
    slug: "FiveM-AD64",
    data: {
      core: 0, // No CPU core information provided
      ram: 0, // No RAM information provided
      storage: 80, // No storage information provided
      database: -1,
      playerSlots: 64,
    },
    price: 1000000,
  },
  {
    slug: "FiveM-AD128",
    data: {
      core: 0, // No CPU core information provided
      ram: 0, // No RAM information provided
      storage: 80, // No storage information provided
      database: -1,
      playerSlots: 128,
    },
    price: 2200000,
  },
  {
    slug: "FiveM-AD256",
    data: {
      core: 0, // No CPU core information provided
      ram: 0, // No RAM information provided
      storage: 120, // No storage information provided
      database: -1,
      playerSlots: 256,
    },
    price: 4850000,
  },
];