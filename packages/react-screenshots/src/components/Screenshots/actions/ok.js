import Action from './action'

export default class Ok extends Action {
  static title = 'Ok'

  static icon = 'screenshots-icon-ok'

  constructor (props) {
    super(props)
    const { el, setContext, context } = props
    this.emit('onOk', {
      viewer: { ...context.viewer },
      dataURL: el.toDataURL('image/png')
    })
    setContext({
      viewer: null,
      action: null,
      stack: [],
      state: {},
      cursor: null
    })
  }
}
