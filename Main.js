const h = require('react-hyperscript')
const {pure} = require('react-derivable')

const state = require('./state')

module.exports = pure(() => {
  return (
    h('div', [
      h('nav.nav', [
        h('.nav-left', [
          h('a.nav-item', {href: '#!/'}, 'coisas')
        ]),
        h('.nav-center', [
          // h('a.nav-item', {href: `/${route}/`}, route)
        ])
      ]),
      h(components[state.route.get().componentName])
    ])
  )
})

const components = require('./components')
