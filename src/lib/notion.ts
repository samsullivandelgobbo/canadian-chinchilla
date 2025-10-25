import { Client } from "@notionhq/client";

// if (!process.env.NOTION_TOKEN) {
//   throw new Error("NOTION_TOKEN is required");
// }

// if (!process.env.NOTION_CHINCHILLAS_DB_ID) {
//   throw new Error("NOTION_CHINCHILLAS_DB_ID is required");
// }

// if (!process.env.NOTION_APPLICATIONS_DB_ID) {
//   throw new Error("NOTION_APPLICATIONS_DB_ID is required");
// }

export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const DATABASES = {
  CHINCHILLAS: process.env.NOTION_CHINCHILLAS_DB_ID,
  APPLICATIONS: process.env.NOTION_APPLICATIONS_DB_ID,
};
