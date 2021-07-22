module.exports = {
  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/main',
        '/search',
        '/error/404',
        '/error:code',
        '/comingSoon'
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
}
