import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

export const QueryProvider = ({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
