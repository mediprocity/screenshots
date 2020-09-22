import Action from './action'

export default class Cancel extends Action {
  static title = 'Cancel'

  static icon = 'screenshots-icon-cancel'

  constructor (props) {
    super(props)
    const { setContext } = props
    this.emit('onCancel')
    setContext({
      viewer: null,
      action: null,
      stack: [],
      state: {},
      cursor: null,
      editPointers: []
    })
  }
}
