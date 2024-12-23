import { contextBridge } from 'electron'

if (process.contextIsolated) {
  throw new Error('This preload script should not be used in isolated context.')
}

try {
  contextBridge.exposeInMainWorld('context', {})
} catch (error) {
  console.error(error)
}
