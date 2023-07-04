import { AdvancedFiveM, AdvancedMinecraft, AdvancedVPS, GeneralMinecraft, GeneralProxyMinecraft, KabyMinecraft, Product, TurboProxyMinecraft } from "./products";

export interface Series {
  name: string;
  slug: string;
  thumbnail: string;
  price: number;
  description: string;
  products?: Product[];
}

const VPSSeries: Series[] = [
  {
    name: "Advanced",
    slug: "advanced",
    thumbnail: "",
    price: 385000,
    products: AdvancedVPS,
    description:
      "Ryzen 7 5800x KVM Plans with NVMe SSD and exclusive Game DDoS Protection, perfect for medium-large scale servers",
  },
]

const FivemSeries: Series[] = [
  {
    name: "Advanced",
    slug: "advanced",
    thumbnail: "",
    price: 385000,
    products: AdvancedFiveM,
    description:
      "Need a fast FiveM server? We have you covered! We offer a wide range of plans to suit your needs. We got you covered! Our dedicated plans are perfect for large scale servers, equipped with a high frequency cpu clock based on Zen 3 (Ryzen 5000 Series)",
  },
]

const MinecraftSeries: Series[] = [
  {
    name: "General",
    slug: "general",
    products: GeneralMinecraft,
    thumbnail: "",
    price: 25000,
    description:
      "General purpose plans, great for private or small community servers, equipped with a reliable cpu clock based on AMD EPYC™ or Intel CPU(s) with atleast 2.6 GHz clock speed and blazingly fast NVMe Storage",
  },
  {
    name: "Advanced",
    slug: "advanced",
    products: AdvancedMinecraft,
    thumbnail: "",
    price: 385000,
    description:
      "Need more power? Advanced plans are for you, equipped with a high frequency cpu clock based on Zen 3 (Ryzen 5000 Series)",
  },
  {
    name: "Kaby",
    slug: "kaby",
    products: KabyMinecraft,
    thumbnail: "",
    price: 275000,
    description:
      "Need more power with friendly price? Kaby suits you, Kaby plans are equipped with a high frequency cpu clock based on Kaby Lake (Intel 7th Gen)",
  },
  {
    name: "General Proxy",
    slug: "general-proxy",
    products: GeneralProxyMinecraft,
    thumbnail: "",
    price: 25000,
    description:
      "General Proxy plans for general use, great for small to medium communities",
  },
  {
    name: "Turbo Proxy",
    slug: "turbo-proxy",
    products: TurboProxyMinecraft,
    thumbnail: "",
    price: 50000,
    description:
      "Turbo Proxy plans for extreme use of proxy, great for medium to large communities",
  },
]

export { VPSSeries, FivemSeries, MinecraftSeries }