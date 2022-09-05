import React from 'react';
import { List, Avatar, Card } from 'antd';

import { Company } from '../../../constants/types';

interface PersonDisplayProps {
  item: Company;
}

export const CompanyCard = ({ item }: PersonDisplayProps) => (
  <List.Item>
    <Card style={{ margin: 0, padding: 0 }}>
      <Card.Meta
        avatar={<Avatar src={item.image} />}
        title={item.name}
        description={`Company from ${item.country}`}
      />
    </Card>
  </List.Item>
);

export default CompanyCard;
