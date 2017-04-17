// @cliDescription  Example Video command
// Generates a video component

module.exports = async function (context) {
  // Learn more about context: https://infinitered.github.io/gluegun/#/context-api.md
  const { parameters, strings, print, ignite } = context
  const { pascalCase, isBlank } = strings

  // validation
  if (isBlank(parameters.first)) {
    print.info(`ignite generate video <name>\n`)
    print.info('A name is required.')
    return
  }

  const name = pascalCase(parameters.first)
  const props = { name }

  // Copies the `video.js.ejs` in your plugin's templates folder
  // into App/Components/${name}.js.
  const jobs = [{
    template: 'video.js.ejs',
    target: `App/Components/${name}.js`
  }]

  // make the templates and pass in props with the third argument here
  await ignite.copyBatch(context, jobs, props)
}
