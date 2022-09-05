import React from 'react';
import { List, Avatar, Button, Card } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import styled from 'styled-components';

import { Person } from '../../../constants/types';

interface PersonDisplayProps {
  item: Person;
  onEdit: (email: string) => void;
}

const CustomCard = styled(Card)`
  border: 1px solid rgba(106, 103, 103, 0.775);
`;

export const PersonListItem = ({ onEdit, item }: PersonDisplayProps) => (
  <List.Item
    actions={[
      <Button onClick={() => onEdit(item.email)} icon={<EditOutlined />} />,
    ]}
  >
    <List.Item.Meta
      avatar={<Avatar src={item.image} />}
      title={item.name}
      description={item.email}
    />
  </List.Item>
);

export const PersonCard = ({ item, onEdit }: PersonDisplayProps) => (
  <List.Item>
    <CustomCard
      bordered
      style={{}}
      actions={[
        <Button onClick={() => onEdit(item.email)} icon={<EditOutlined />} />,
      ]}
    >
      <Card.Meta
        avatar={<Avatar src={item.image} />}
        title={item.name}
        description={item.email}
      />
    </CustomCard>
  </List.Item>
);

export default { ListItem: PersonListItem, Card: PersonCard };
