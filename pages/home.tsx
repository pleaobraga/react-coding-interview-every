import React, { useState } from 'react';
import { PageHeader } from 'antd';
import { TeamOutlined } from '@ant-design/icons';

import { withContextInitialized } from '../components/hoc';
import { usePeople } from '../components/hooks/usePeople';

import Header, { DEFAULT_PAGE_SIZE } from '../components/molecules/ListHeader';
import GenericList from '../components/organisms/GenericList';
import PersonDisplay from '../components/molecules/PersonDisplay';

import { DISPLAY_MODE_CARD, Person } from '../constants/types';
import { useRouter } from 'next/router';
import { ResponsiveListCard } from '../constants';
import { useEffect } from 'react';

const Home = () => {
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE);
  const [displayMode, setDisplayMode] = useState(DISPLAY_MODE_CARD);
  const router = useRouter();
  const { data: people, totalItems, loading, execute } = usePeople();

  const isCard = displayMode === DISPLAY_MODE_CARD;
  const Component = isCard ? PersonDisplay.Card : PersonDisplay.ListItem;

  return (
    <PageHeader avatar={{ icon: <TeamOutlined /> }} title="People list">
      <GenericList<Person>
        extra={isCard && ResponsiveListCard}
        data={people}
        loading={loading}
        handleLoadMore={() => execute(pageSize)}
        hasMore={people.length < totalItems}
        ItemRenderer={({ item }: any) => (
          <Component onEdit={(email) => router.push(`/person/${email}`)} item={item} />
        )}
        Header={
          <Header
            displayMode={displayMode}
            onDiplayModeChange={(newDisplayMode) => setDisplayMode(newDisplayMode as any)}
            pageSize={pageSize}
            title={`Displaying ${people.length} of ${totalItems}`}
            onPageSizeChange={setPageSize}
          />
        }
      />
    </PageHeader>
  );
};

export default withContextInitialized(Home);
