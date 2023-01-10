import * as emitter from './index.mjs'

emitter.registerEventListener('play')
emitter.triggerEvent('play', 'test')