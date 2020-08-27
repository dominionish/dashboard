import React from 'react';
import UniqueObservable, { UniqueObservableType } from './../Observable/UniqueObservable';

import './Dashboard.css';

const Dashboard = () => {
  const [uniqueObservable, setUniqueObservable] = React.useState<UniqueObservableType>({} as UniqueObservableType)

  React.useEffect(() => {
    const uniqueObservable = new UniqueObservable();
    uniqueObservable.subscribe((value: UniqueObservableType) => setUniqueObservable(value))

    return uniqueObservable.unsubscribe;
  }, [])

  return (
    <div className="dashboard">
      <div className="system">
        <span>Temperature</span>
        <span className="value">{uniqueObservable.temperature}</span>
      </div>
      <div className="system">
        <span>Air pressure</span>
        <span className="value">{uniqueObservable.airPressure}</span>
      </div>
      <div className="system">
        <span>Humidity</span>
        <span className="value">{uniqueObservable.humidity}</span>
      </div>
    </div>
  );
}

export default Dashboard;
