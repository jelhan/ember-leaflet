import Helper from '@ember/component/helper';
import { classify } from 'ember-leaflet/utils/classify';

export default Helper.helper(function ([arg1 = '']) {
  return classify(arg1);
});
