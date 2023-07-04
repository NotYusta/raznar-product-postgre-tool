import fs from "fs";
import { Services } from "./services";

export declare const enum ServiceType {
  SERVER_HOSTING = "server_hosting",
  GAME_HOSTING = "game_hosting",
  APP_HOSTING = "app_hosting",
}

let serviceQuery = `INSERT INTO public.services(name, slug, startPrice, type) VALUES (%name%, %slug%, %startPrice%::public.price, %type%);`;
let seriesQuery = `INSERT INTO public.series(name, slug, service, thumbnail, price, description) VALUES (%name%, %slug%, %service%, %thumbnail%, %price%::public.price, %description%);`;
let productsQuery = `INSERT INTO public.products(slug, series, data, price) VALUES (%slug%, %series%, %data%, %price%::public.price);`;

export const printQuery = async () => {
  const servicesQueryList: string[] = [];
  const seriesQeuryList: string[] = [];
  const productQueryList: string[] = [];
  for (let serviceIndex = 0; serviceIndex < Services.length; serviceIndex++) {
    const service = Services[serviceIndex];
    const prices: string[] = [];
    prices.push(service.startPrice.toString());
    // USD
    const usdPrice = Math.floor(service.startPrice / 130) / 100;
    // EUR
    const eurPrice = Math.floor((service.startPrice / 130) * 0.96) / 100;

    prices.push(usdPrice.toString());
    prices.push(eurPrice.toString());

    servicesQueryList.push(
      serviceQuery
        .replace("%name%", `'${service.name}'`)
        .replace("%slug%", `'${service.slug}'`)
        .replace("%startPrice%", `(${prices.join(",")})`)
        .replace("%type%", `'${service.type}'`)
    );

    const Series = service.series;
    for (let seriesIndex = 0; seriesIndex < Series.length; seriesIndex++) {
      const series = Series[seriesIndex];
      const prices: string[] = [];
      prices.push(series.price.toString());
      // USD
      const usdPrice = Math.floor(series.price / 130) / 100;
      // EUR
      const eurPrice = Math.floor((series.price / 130) * 0.96) / 100;

      prices.push(usdPrice.toString());
      prices.push(eurPrice.toString());

      seriesQeuryList.push(
        seriesQuery
          .replace("%name%", `'${series.name}'`)
          .replace("%slug%", `'${series.slug}'`)
          .replace("%service%", serviceIndex.toString())
          .replace("%thumbnail%", `'${series.thumbnail}'`)
          .replace("%price%", `(${prices.join(",")})`)
          .replace("%description%", `'${series.description}'`)
      );

      if (series.products) {
        const products = series.products;
        for (
          let productIndex = 0;
          productIndex < products.length;
          productIndex++
        ) {
          const p = products[productIndex];
          const prices: string[] = [];
          prices.push(p.price.toString());

          // USD
          const usdPrice = Math.floor(p.price / 130) / 100;
          // EUR
          const eurPrice = Math.floor((p.price / 130) * 0.96) / 100;

          // replace , to .
          prices.push(usdPrice.toString());
          prices.push(eurPrice.toString());

          productQueryList.push(
            productsQuery
              .replace("%slug%", `'${p.slug}'`)
              .replace("%series%", (seriesIndex + 1).toString())
              .replace("%data%", `'${JSON.stringify(p.data)}'`)
              .replace("%price%", `(${prices.join(",")})`)
          );
        }
      }
    }
  }

  fs.writeFileSync("./services.sql", servicesQueryList.join("\n"));
  fs.writeFileSync("./series.sql", seriesQeuryList.join("\n"));
  fs.writeFileSync("./products.sql", productQueryList.join("\n"));

  fs.writeFileSync('./services.json', JSON.stringify(Services, null, 2), 'utf8');
  fs.writeFileSync('./services.min.json', JSON.stringify(Services), 'utf8');
  fs.writeFileSync('./series.json', JSON.stringify(Services.map(s => s.series).flat(), null, 2), 'utf8');
  fs.writeFileSync('./series.min.json', JSON.stringify(Services.map(s => s.series).flat()), 'utf8');
  fs.writeFileSync('./products.json', JSON.stringify(Services.map(s => s.series).flat().map(s => s.products).flat(), null, 2), 'utf8');
  fs.writeFileSync('./products.min.json', JSON.stringify(Services.map(s => s.series).flat().map(s => s.products).flat()), 'utf8');
};
