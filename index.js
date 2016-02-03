'use strict';
var electron = require('electron')
var BrowserWindow = electron.BrowserWindow

electron.app.on('window-all-closed', () => {})

electron.app.on('ready', () => {
  console.log('electron app ready')
  var browserWindow = new BrowserWindow()
  browserWindow.on('closed', () => {
    console.log('browserWindow: closed')
    browserWindow = null
  })
  browserWindow.on('close', () => {
    console.log('browserWindow: close')
  })
  browserWindow.on('unresponsive', () => {
    console.log('browserWindow: unresponsive')
  })
  browserWindow.webContents.on('did-finish-load', event => {
    console.log('webContents: did-finish-load')
  })
  browserWindow.webContents.on('did-fail-load', (event, errorCode, errorDescription, validatedURL) => {
    console.log(`
      webContents: did-fail-load
      errorCode: ${errorCode}
      errorDescription: ${errorDescription}
      validatedURL: ${validatedURL}
    `)
  })
  browserWindow.webContents.on('did-frame-finish-load', (event, isMainFrame) => {
    console.log(`
      webContents: did-frame-finish-load
      isMainFrame: ${isMainFrame}
    `)
  })
  browserWindow.webContents.on('did-start-loading', event => {
    console.log('webContents: did-start-loading')
  })
  browserWindow.webContents.on('did-stop-loading', event => {
    console.log('webContents: did-stop-loading')
  })
  browserWindow.webContents.on('did-get-response-details', (event, status, newURL, originalURL, httpResponseCode, requestMethod, referrer, headers) => {
    console.log(`
      webContents: did-get-response-details
      status: ${status}
      newURL: ${newURL}
      originalURL: ${originalURL}
      httpResponseCode: ${httpResponseCode}
      requestMethod: ${requestMethod}
      referrer: ${referrer}
      headers: ${headers}
    `)
  })
  browserWindow.webContents.on('did-get-redirect-request', (event, oldURL, newURL, isMainFrame, httpResponseCode, requestMethod, referrer, headers) => {
    console.log(`
      webContents: did-get-redirect-request
      oldURL: ${oldURL}
      newURL: ${newURL}
      isMainFrame: ${isMainFrame}
      httpResponseCode: ${httpResponseCode}
      requestMethod: ${requestMethod}
      referrer: ${referrer}
      headers: ${headers}
    `)
  })
  browserWindow.webContents.on('dom-ready', event => {
    console.log('webContents: dom-ready')
  })
  browserWindow.webContents.on('crashed', event => {
    console.log('webContents: crashed')
  })
  browserWindow.webContents.on('destroyed', event => {
    console.log('webContents: destroyed')
  })
  browserWindow.webContents.on('certificate-error', event => {
    console.log('webContents: certificate-error')
  })
  //browserWindow.loadURL('https://google.com')
  browserWindow.loadURL('http://lszfief78nwfo8dosz8nfeosz8jeosz8t.com')
  //browserWindow.loadURL('http://nonsense:port/yay')
})