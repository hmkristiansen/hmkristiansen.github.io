module.exports = function(eleventyConfig) {
    // Passthrough Copy
    eleventyConfig.addPassthroughCopy("src/static");
  
    return {
      dir: {
        input: "src",
        output: "_site",
        includes: "_includes",
        data: "_data"
      }
    };
  };
  