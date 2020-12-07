const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {

	// Výchozí výstupní složka: _site
	
	// Zkopírovat images/ do _site/images
	eleventyConfig.addPassthroughCopy("images");
	
	// Zkopírovat css/ to _site/css/
  eleventyConfig.addPassthroughCopy("css");

  // RSS plugin
  eleventyConfig.addPlugin(pluginRss);
  
  return {
		// možné formáty šablon
		templateFormats: ["njk","html", "liquid", "md"],
		
		// jako šablonovací jazyk zvolíme Nunjucks`
		markdownTemplateEngine: "njk",
		htmlTemplateEngine: "njk",
		dataTemplateEngine: "njk",
  }

};

