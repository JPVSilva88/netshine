import React from 'react';
import PropTypes from 'prop-types';
import { getData } from 'actions/index.js';
import { connect } from 'react-redux';
import Moment from 'moment-timezone';
import c3 from 'c3';
import 'c3/c3.min.css';
import './app.scss';

class Chart extends React.Component {
  componentDidMount() {
    this.startChart();
  }

  componentDidUpdate() {
    this.startChart();
  }

  startChart() {
    const {columns, upload, download, ping} = this.props.data;

    c3.generate({
      bindto: '#chart',
      data: {
        columns: [upload, download],
        type: 'spline'
      },
      axis: {
        x: {
          type: 'categories',
          categories: columns,
          tick: {
            culling: true,
            multiline: false
          }
        }
      },
      point: {
        r: 0
      }
    });

    c3.generate({
      bindto: '#chartPing',
      data: {
        columns: [ping],
        type: 'spline'
      },
      color: {
        pattern: ['#ff0000']
      },
      axis: {
        x: {
          type: 'categories',
          categories: columns,
          tick: {
            culling: true,
            multiline: false
          }
        }
      },
      point: {
        r: 0
      }
    });
  }

  render() {
    return (
      <div>
        <div className="chart" id="chart"/>
        <div className="chart" id="chartPing"/>
      </div>
    );
  }
}

Chart.defaultProps = {};

Chart.propTypes = {
  data: PropTypes.shape({
    upload: PropTypes.arrayOf(PropTypes.number).isRequired,
    download: PropTypes.arrayOf(PropTypes.number).isRequired,
    ping: PropTypes.arrayOf(PropTypes.number).isRequired,
    columns: PropTypes.array.isRequired
  })
};

function mapStateToProps(state) {
  const { data, selectedServer } = state;

  const upload = ['upload'];
  const download = ['download'];
  const ping = ['ping'];
  const columns = [];

  if(data) {
    data
      .filter(r => r.server.id === selectedServer.id)
      .sort((a, b) => a.timestamp.localeCompare(b.timestamp))
      .forEach((r) => {
        upload.push(r.upload);
        download.push(r.download);
        ping.push(r.ping);
        columns.push(Moment.tz(r.timestamp, 'UTC').format('HH:mm'));
      });
  }

  return {
    data: {
      upload,
      download,
      ping,
      columns
    }
  };
}

export default connect(mapStateToProps)(Chart);
