import { HtmlBasePlugin } from "@11ty/eleventy";

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(HtmlBasePlugin);

  eleventyConfig.addPassthroughCopy("source/style.css");
  eleventyConfig.addPassthroughCopy("source/images");
  eleventyConfig.addPassthroughCopy("source/**/*.js");
  eleventyConfig.addPassthroughCopy("source/**/*.css");

  eleventyConfig.addGlobalData("layout", "base.html");

  return {
    dir: {
      input: "source",
      includes: "_includes",
      output: "_site"
    }
  };
}
