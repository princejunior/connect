import AbstractView from './AbstractView.js';

const names = 'Settings';
export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle('Settings');
  }

  async getHtml() {
    return `
    <h1>${names} </h1>
    <p>frvuy gjhg hfgjf f g g jhgkjh jhgjh </p>
    <p>
    <a href='/posts' data-link>View recent posts</a></p>
    `;
  }
}
