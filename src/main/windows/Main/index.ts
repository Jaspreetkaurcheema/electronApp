import { BrowserWindow } from 'electron'
import { join } from 'path'

import { ENVIRONMENT } from 'shared/constants'
import { createWindow } from 'main/factories'
import { displayName } from '~/package.json'

export async function MainWindow() {
  const window = createWindow({
    id: 'main',
    title: 'MasterCookAi',
    width: 1500,
    height: 1000,
    show: false,
    autoHideMenuBar: true,
    vibrancy: 'under-window',
    alwaysOnTop: true,
    visualEffectState: 'active',
    // autoHideMenuBar: true,
    frame: true,
    trafficLightPosition: { x: 15, y: 10 },
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false,
      contextIsolation: true
    },
  })

  window.webContents.on('did-finish-load', () => {
    if (ENVIRONMENT.IS_DEV) {
      window.webContents.openDevTools({ mode: 'detach' })
    }

    window.show()
  })

  window.on('close', () =>
    BrowserWindow.getAllWindows().forEach((window) => window.destroy())
  )

  return window
}
