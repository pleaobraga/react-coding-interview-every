import { useRouter } from 'next/router';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Button, PageHeader, Descriptions, Input, message } from 'antd';

import { withContextInitialized } from '../../components/hoc';
import CompanyCard from '../../components/molecules/CompanyCard';
import GenericList from '../../components/organisms/GenericList';
import OverlaySpinner from '../../components/molecules/OverlaySpinner';
import { usePersonInformation } from '../../components/hooks/usePersonInformation';

import { Company } from '../../constants/types';
import { ResponsiveListCard } from '../../constants';

const PersonDetail = () => {
  const router = useRouter();
  const { load, loading, save, data } = usePersonInformation(
    router.query?.email as string,
    true
  );

  const [isEditable, setIsEditable] = useState(false)
  const formEl = useRef()

  useEffect(() => {
    load();
  }, []);

  if (loading) {
    return <OverlaySpinner title={`Loading ${router.query?.email} information`} />;
  }

  if (!data) {
    message.error("The user doesn't exist redirecting back...", 2, () =>
      router.push('/home')
    );
    return <></>;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const inputs = formEl?.current.getElementsByTagName('input')

    console.log(inputs, 'inputs')

    const newValues = {}


    for (let input of inputs) {
      newValues[input.variableName] = input.value
    }

    save({ ...data, ...newValues })

  }

  const fields = [
    {
      name: "Name",
      type: 'text',
      variableName: 'name'
    },
    {
      name: "Gender",
      type: 'select',
      variableName: 'gender'
    },
    {
      name: "Phone",
      type: 'text',
      variableName: 'phone'
    },
    {
      name: "Birthday",
      type: 'date',
      variableName: 'birthday'
    },
  ]

  return (
    <>
      <PageHeader
        onBack={router.back}
        title="Person"
        subTitle="Profile"
        extra={[
          <Button
            style={{ padding: 0, margin: 0 }}
            type="link"
            href={data.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit website
          </Button>,
          <Button type="default" onClick={() => { setIsEditable(true) }}>
            Edit
          </Button>,
        ]}
      >
        {data && (
          <form ref={formEl} onSubmit={handleSubmit} >
            <Descriptions size="small" column={1}>
              {
                fields.map((field) => {
                  return <Descriptions.Item label={field.name}><Input name={field.variableName} readOnly={!isEditable} defaultValue={data[field.variableName]} /></Descriptions.Item>
                })
              }
            </Descriptions>
            <button type='submit' disabled={!isEditable} >save</button>
          </form>
        )}
        <GenericList<Company>
          loading={loading}
          extra={ResponsiveListCard}
          data={data && data.companyHistory}
          ItemRenderer={({ item }: any) => <CompanyCard item={item} />}
          handleLoadMore={() => { }}
          hasMore={false}
        />
      </PageHeader>
    </>
  );
};

export default withContextInitialized(PersonDetail);
