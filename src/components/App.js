import React from 'react';
import 'components/app.scss';
import Chart from 'components/Chart';
import ChartDatePicker from 'containers/ChartDatePicker';
import ServerDropDown from 'containers/ServerDropDown';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <ChartDatePicker/>
        <ServerDropDown/>
        <Chart/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
