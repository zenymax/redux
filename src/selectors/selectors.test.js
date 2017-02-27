/**
 * Created by zenymax on 2/27/17.
 */
import React from 'react'
import expect from 'expect'
import {mount, shallow} from 'enzyme'
import {authorsFormattedForDropdown} from './selectors'

describe('Author Selectors', ()=>{
  describe('authorsFormattedForDropdown', ()=>{
    it('Should return author data formatted for use in a dropdown', ()=>{
      const authors = [
        {id: 'id-1-nha', firstName: 'Hello1', lastName: 'haiz1'},
        {id: 'id-2-nha', firstName: 'Hello2', lastName: 'haiz2'},
      ]

      const expected = [
        {value:'id-1-nha', text: 'Hello1 haiz1'},
        {value:'id-2-nha', text: 'Hello2 haiz2'}
      ]

      expect(authorsFormattedForDropdown(authors)).toEqual(expected)

    })
  })
})
