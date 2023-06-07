import { Page } from '../types/types';
import AppMenu from './AppMenu';
// import {models} from './ifrsSidebar.json';

const AppSidebar: Page = ( props ) => {
  const { menu } = props;

  //  console.log('sidebar :' + models[0].label);

  //  const model = models;
  //  console.log('sidebar2 :' + model[0].label);

  // const model2 = menu;
  // console.log('sidebar3 :' + model2[0].label);

    return <AppMenu menu = { menu } />;
};

export default AppSidebar;
