import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@self/markdown-easy-main",
  app: () => System.import("@self/markdown-easy-main"),
  activeWhen: ["/"]
});

start({
  urlRerouteOnly: true,
});
