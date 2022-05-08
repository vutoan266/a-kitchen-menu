import request from "../utils/request";

export const getMenuAPI = () =>
  request.get("https://atlas-fe-menu.atlas-kitchen.workers.dev/menu");
