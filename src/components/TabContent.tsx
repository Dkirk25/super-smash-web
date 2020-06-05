import * as React from 'react';
import { Columns, Column, Content } from './bulma';


export interface TabContentProps {
 
}

export const TabContent: React.FC<TabContentProps> = props => {
  const { children } = props;
  return (
    <Columns>
      <Column isNarrow spanSize="full">
        <Content>
          {children}
        </Content>
      </Column>
    </Columns>
  )
}