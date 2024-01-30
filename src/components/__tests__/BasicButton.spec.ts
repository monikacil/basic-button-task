import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import BasicButton from '../BasicButton.vue'

describe('BasicButton', () => {
  it('renders properly', () => {
    const wrapper = mount(BasicButton, {
      props: { color: 'red' },
      slots: {
        default: 'Button test'
      }
    })
    expect(wrapper.html()).toContain('Button test')
    expect(wrapper.html()).toMatchSnapshot()
  })
})
