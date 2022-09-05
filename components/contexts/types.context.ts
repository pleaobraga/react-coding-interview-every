import React from 'react';

export interface IContextData<T> {
  data: T;
  initialized: boolean;
}

export interface IContextProviderProps<T> {
  children: React.ReactNode;
}
