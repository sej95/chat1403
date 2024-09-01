import { notFound } from 'next/navigation';
import { PropsWithChildren } from 'react';
import { Flexbox } from 'react-layout-kit';

import { serverFeatureFlags } from '@/config/featureFlags';

import { Tabs } from './Tabs';
import { PageProps } from './type';

export default ({ children, params }: PropsWithChildren<PageProps>) => {
  const enableRAGEval = serverFeatureFlags().enableRAGEval;

  if (!enableRAGEval) return notFound();

  return (
    <Flexbox gap={24} height={'100%'} padding={24} style={{ paddingTop: 0 }}>
      <Tabs knowledgeBaseId={params.id} />
      {children}
    </Flexbox>
  );
};