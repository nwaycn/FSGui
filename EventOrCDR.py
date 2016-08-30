

import redis
      
rc = redis.Redis(host='127.0.0.1')
      
ps = rc.pubsub()
      
ps.psubscribe(['event*'])

for item in ps.listen():
    print item

    if item['type'] == 'pmessage':

        print item['data']
