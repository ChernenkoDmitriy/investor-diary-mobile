import { links } from "../../Links";
import { requester } from "../../libs/requester";
import { ApiService } from "../../repository/ApiService";
import { sectorsModel } from "./SectorsModel";

export const candidatesService = new ApiService(requester, links.sectors, sectorsModel);