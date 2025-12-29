import { createContext, MutableRefObject } from 'react';
import { TableFormItem } from '../components/Form/FormRender';
import { ActionType } from '../typing';

export type ProTableContextType = {
  selectedRows?: any[];
  selectedRowKeys?: any[];
  action?: MutableRefObject<ActionType | undefined>;
  formRef?: TableFormItem<any>['formRef'];
};

export const ProTableContext = createContext<ProTableContextType>({});
