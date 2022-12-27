import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 408,
  site: "hackatonmarco",
  domains: ["hackatonmarco.deco.site"],
});