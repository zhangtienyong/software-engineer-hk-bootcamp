import json 
from sseclient import SSEClient as EventSource
from datetime import datetime

url = 'https://stream.wikimedia.org/v2/stream/recentchange'

with open('new_pages.csv', 'a') as new_pages, \
     open('edit_pages.csv', 'a') as edit_pages, \
     open('categorize_pages.csv', 'a') as categorize_pages:
    # You can write the header here
    # categorize_pages.write('type,title,comment,timestamp,user,bot,uri,wiki,server_name\n')
    # new_pages.write('type,title,comment,timestamp,user,bot,uri,wiki,server_name,length,revision\n')
    # edit_pages.write('type,title,comment,timestamp,user,bot,uri,wiki,server_name,old_length,old_revision\n')

    for event in EventSource(url):
        if event.event == 'message':
            try:
                content = json.loads(event.data)
                # json.dumps(content, indent=4, sort_keys=True)
            except ValueError:
                pass
            else:
                event_row = {
                    'type': content.get('type'),
                    'title': content.get('title'),
                    'comment': content.get('comment'),
                    'timestamp': datetime.fromtimestamp(content.get('timestamp')).isoformat(),
                    'user': content.get('user'),
                    'bot': content.get('bot'),
                    'uri': content.get('meta').get('uri'),
                    'wiki': content.get('wiki'),
                    'server_name': content.get('server_name')
                }
                if content.get('type') == 'new':
                    # Logic for extracting new type event
                    event_row['length'] = content.get('length').get('new')
                    event_row['revision'] = content.get('revision').get('new')
                elif content.get('type') == 'edit':
                    # Logic for extracting edit type event
                    event_row['old_length'] = content.get('length').get('new')
                    event_row['old_revision'] = content.get('revision').get('new')
                print(event_row)

                if content['type'] == 'categorize':
                    categorize_pages.write('{type},{title},{comment},{timestamp},{user},{bot},{uri},{wiki},{server_name}\n'
                        .format(**event_row))
                    categorize_pages.flush()
                
                if content['type'] == 'new':
                    new_pages.write('{type},{title},{comment},{timestamp},{user},{bot},{uri},{wiki},{server_name},{length},{revision}\n'
                        .format(**event_row))
                    new_pages.flush()
                    
                if content['type'] == 'edit':
                    edit_pages.write('{type},{title},{comment},{timestamp},{user},{bot},{uri},{wiki},{server_name},{old_length},{old_revision}\n'
                        .format(**event_row))
                    edit_pages.flush()
