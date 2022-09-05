import React from 'react';
import { List } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';
import styled from 'styled-components';

interface Item {
  readonly id: string;
}

interface GenericListProps<T extends Item> {
  hasMore: boolean;
  loading: boolean;
  Header?: React.ReactNode;
  handleLoadMore: () => void;
  data: T[];
  extra?: any;
  ItemRenderer: (params: { item: T }) => JSX.Element;
}

const Container = styled.div`
  max-height: 90vh;
  width: 100%;
  padding: 10px;
  overflow: auto;
  border-radius: 4px;
`;

const GenericList = <T extends Item>({
  data,
  handleLoadMore,
  loading,
  hasMore,
  ItemRenderer,
  extra = {},
  Header,
}: GenericListProps<T>) => (
  <Container>
    <InfiniteScroll
      initialLoad={false}
      pageStart={0}
      loadMore={handleLoadMore}
      hasMore={!loading && hasMore}
      useWindow={false}
    >
      <List
        {...extra}
        header={Header}
        loading={loading}
        dataSource={data}
        renderItem={(item: T) => <ItemRenderer key={item.id} item={item} />}
      />
    </InfiniteScroll>
  </Container>
);

export default GenericList;
