import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InstagramMetricsViewer = () => {
  const [metrics, setMetrics] = useState([]);

  useEffect(() => {
    axios.get('/instagram-metrics').then((response) => {
      setMetrics(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Instagram Metrics Viewer</h1>
      <table>
        <thead>
          <tr>
            <th>Account ID</th>
            <th>Impressions</th>
            <th>Reach</th>
            <th>Engagement Rate</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {metrics.map((metric) => (
            <tr key={metric._id}>
              <td>{metric.account_id}</td>
              <td>{metric.impressions}</td>
              <td>{metric.reach}</td>
              <td>{metric.engagement_rate}</td>
              <td>{metric.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InstagramMetricsViewer;