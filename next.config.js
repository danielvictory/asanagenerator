/** @type {import('next').NextConfig} */
const nextConfig = {
  // Change the config file to play nice with styled components
  // *** Why does this need to happen? Server side rendering? ***

  reactStrictMode: false, // *** Seems wrong to turn this off??? ***
  compiler: {
    styledComponents: {
      displayName: true,
      ssr: true,
      fileName: true,
      topLevelImportPaths: [],
      meaninglessFileNames: ["index"], // *** seems hurtful, ha - what's the deal? ***
      cssProp: true,
      namespace: "",
      minify: false,
      transpileTemplateLiterals: false,
      pure: false,
    }
  }
}

module.exports = nextConfig
