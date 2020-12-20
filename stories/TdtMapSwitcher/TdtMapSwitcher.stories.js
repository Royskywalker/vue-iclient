import {
  toI18n
} from '../../.storybook/lang';

export default {
  title: 'Gis Component/tdtMapSwitcher'
};

export const tdtMapSwitcher = () => ({
  data() {
    return {
      mapSwitcherData: {
        select: '',
        label: false,
        tk: '1d109683f4d84198e37a38c442d68311'
      }
    };
  },
  template: `
  <sm-web-map style="height:700px" mapId="801571284" serverUrl="https://iportal.supermap.io/iportal">
    <sm-tdt-map-switcher position="top-left" :data="mapSwitcherData" />
  </sm-web-map>
  `
});
tdtMapSwitcher.story = {
  name: toI18n('gisComponent.tdtMapSwitcher')
};