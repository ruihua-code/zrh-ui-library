import ZrhButton from './components/button/button.vue';
import ZrhLabel from './components/label/label.vue';

const components = [ZrhButton, ZrhLabel];

const install = (app) => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};

export { ZrhButton, ZrhLabel, install };
