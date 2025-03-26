import http from 'k6/http';

import {check, sleep} from 'k6';

export const options = {
    stages: [
      { duration: '30s', target: 20 },
      { duration: '1m30s', target: 10 },
      { duration: '20s', target: 0 },
    ],
  };
export default function(){
    const res = http.get('https://qaplayground.dev/apps/dynamic-table/')
    check(res, {
        'connection time < 100ms': (r) => r.timings.connecting < 100,
        'waiting time < 200ms': (r) => r.timings.waiting < 200,
    });
    sleep(1);
}