import { map } from "../.map.ts";
import { createMDXSource, defaultSchemas } from "fumadocs-mdx";
import { z } from "zod";
import { loader } from "fumadocs-core/source";

export const blogs = loader({
  baseUrl: "/blogs",
  rootDir: "blogs",
  source: createMDXSource(map, {
    schema: {
      frontmatter: defaultSchemas.frontmatter.extend({
        author: z.string(),
        cover: z.string().optional(),
        date: z.string().date().or(z.date()).optional(),
      }),
    },
  }),
});
