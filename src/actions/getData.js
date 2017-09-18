import fetch from 'isomorphic-fetch';
import setData from '../actions/setData.js';
import selectServer from '../actions/selectServer.js';
import setServers from '../actions/setServers.js';

function action(date) {
  return function (dispatch) {
    return fetch(`http://54.229.78.46:8080/api/records/${date.format('YYYY-MM-DD')}/${date.add(1, 'days').format('YYYY-MM-DD')}/1`)
      .then(res => res.json())
      .then((res) => {
        const servers = {};
        res.forEach((data) => {
          const server = data.server;
          if (!servers[server.id]) {
            servers[server.id] = server;
          }
        });

        dispatch(setServers(servers));
        const serverIds = Object.keys(servers);
        if(serverIds.length > 0) {
          dispatch(selectServer(servers[serverIds[0]]));
        }
        dispatch(setData(res));
      });
  };
}

module.exports = action;
