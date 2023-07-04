import { ServiceType } from "./query";
import { FivemSeries, MinecraftSeries, Series, VPSSeries } from "./series";

export interface Service {
  name: string;
  slug: string;
  startPrice: number;
  type: string;
  series: Series[];
}

export const Services: Service[] = [
  {
    name: "Minecraft Hosting",
    slug: "minecraft_hosting",
    startPrice: 25000,
    type: ServiceType.GAME_HOSTING,
    series: MinecraftSeries
  },
  {
    name: "App Hosting",
    slug: "app_hosting",
    startPrice: 15000,
    type: ServiceType.APP_HOSTING,
    series: [
      
    ]
  },
  {
    name: "Virtual Private Server",
    slug: "virtual_private_server",
    startPrice: 350000,
    type: ServiceType.SERVER_HOSTING,
    series: VPSSeries
  },
  {
    name: "Fivem Hosting",
    slug: "fivem_hosting",
    startPrice: 525000,
    type: ServiceType.GAME_HOSTING,
    series: FivemSeries
  }
]