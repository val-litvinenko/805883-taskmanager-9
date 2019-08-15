import {getMenuComponent} from './components/menu.js';
import {getSearchComponent} from './components/search.js';
import {getFilterComponent} from './components/filter.js';
import {getTaskComponent} from './components/task.js';
import {getFormComponent} from './components/form.js';
import {getButtonLoadMoreComponent} from './components/load-more-button.js';
import {getSortComponent} from './components/sorting.js';

const CARD_COUNT = 3;
const pageApplication = document.querySelector(`.main`);
const controlContainer = document.querySelector(`.main__control`);

const renderComponent = (container, component) => {
  container.insertAdjacentHTML(`beforeEnd`, component);
};

renderComponent(pageApplication, getFormComponent());
renderComponent(pageApplication, getSearchComponent());
renderComponent(pageApplication, getFilterComponent());
renderComponent(pageApplication, getSortComponent());
for (let i = 0; i < CARD_COUNT; i++) {
  renderComponent(pageApplication, getTaskComponent());
}
renderComponent(pageApplication, getButtonLoadMoreComponent());
renderComponent(controlContainer, getMenuComponent());
