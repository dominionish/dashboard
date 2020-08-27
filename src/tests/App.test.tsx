import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from '../Dashboard/Dashboard';
import '@testing-library/jest-dom/extend-expect';
import UniqueObservable, { UniqueObservableType } from '../Observable/UniqueObservable';

test('renders learn react link', () => {
  const { getByText } = render(<Dashboard />);
  const divElement = getByText(/Temperature/i);
  expect(divElement).toBeInTheDocument();
  const divElement2 = getByText(/Air pressure/i);
  expect(divElement2).toBeInTheDocument();
  const divElement3 = getByText(/Humidity/i);
  expect(divElement3).toBeInTheDocument();
});

test('test callback', () => {
  const uniqueObservable = new UniqueObservable();
  uniqueObservable.subscribe((value: UniqueObservableType) => {
    expect(Object.keys(value)).toBe(3);
  })
});