import LyhTest from '../src/test.vue'

export default {
  title: 'LyhTest',
  component: LyhTest
}

export const Test = _ => ({
  components: { LyhTest },
  template: `
    <div>
      <lyh-test></lyh-test>
    </div>
  `
})