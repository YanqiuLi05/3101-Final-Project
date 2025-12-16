import { HtmlBasePlugin } from "@11ty/eleventy";

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(HtmlBasePlugin);


  eleventyConfig.setInputDirectory("source");


  eleventyConfig.addPassthroughCopy("source/style.css");
  eleventyConfig.addPassthroughCopy("source/**/*.css");
  eleventyConfig.addPassthroughCopy("source/**/*.js");
  eleventyConfig.addPassthroughCopy("source/images");


  eleventyConfig.addGlobalData("layout", "base.html");
}
