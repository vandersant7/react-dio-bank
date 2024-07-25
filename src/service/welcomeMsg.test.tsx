import { describe, expect } from '@jest/globals'

import { welcomeMsg } from './welcomeMsg'

describe('welcomeMsg', () => {

  const mockAlert = jest.fn()
  window.alert = mockAlert
  
  it('Deve exibir a menssagem - Seja bem vindo - ao clicar no botão de login', () => {
    welcomeMsg()
    expect(mockAlert).toBeCalled()
  })
})
