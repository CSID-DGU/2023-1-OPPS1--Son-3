import heapq

def dijkstra(graph, start):
  distances = {}
  for node in graph:
    distances[node] = [float('inf')]
  distances[start][0] = 0
  distances[start].append(start)
  queue = []
  heapq.heappush(queue, [distances[start][0], start])

  while queue:
    current_distance, current_destination = heapq.heappop(queue)

    if distances[current_destination][0] < current_distance:
      continue
    
    for new_destination, new_distance in graph[current_destination].items():
      distance = current_distance + new_distance
      if distance < distances[new_destination][0]:
        distances[new_destination][0] = distance
        distances[new_destination] += distances[current_destination][1:]
        distances[new_destination].append(new_destination)
        heapq.heappush(queue, [distance, new_destination])
  
  new_distances = {}
  for node in list(distances.keys()):
    node_list = []
    for i in range(len(distances[node])):
      if distances[node][i] != node:
        node_list.append(distances[node][i])
      else:
        break
    node_list.append(node)
    new_distances[node] = node_list

  return new_distances

graph = {
    '경영관': {'문화관':11, '사회과학관':57},
    '과학관': {'명진관':37,'상록원':31, 'K':46, 'J':43},
    '다향관': {'E':18},
    '만해관': {'법학관':63, '혜화관':54, 'A':33},
    '명진관': {'과학관':37, 'B':32},
    '문화관': {'경영관':11, '사회과학관':76, '학술관':15},
    '법학관': {'만해관':63, 'A':40, 'G':33, 'H':12},
    '본관': {'원흥관': 31, 'D':12},
    '사회과학관': {'경영관':57, '문화관':76, '혜화관':46, '혜화문':68},
    '상록원': {'과학관':31, 'K':47, '대운동장':26},
    '신공학관': {'C':88, '원흥관':22},
    '원흥관': {'본관':31, '신공학관':22, '정보문화관':20, 'N':35},
    '정보문화관': {'원흥관':20, 'O':28, '학생회관':16},
    '중앙도서관': {'C':26, 'K':54, '신공학관':64},
    '학림관': {'체육관':56, 'P':108, '후문':79},
    '학생회관': {'O':24, '정보문화관':16},
    '학술관': {'문화관':15},
    '혜화관': {'만해관':54, '사회과학관':46, '혜화문':75},
    '혜화문': {'혜화관':75, '사회과학관':68},
    '대운동장': {'A':129, '상록원':26},
    '체육관': {'M': 76, '학림관':56},
    '후문': {'학림관':79, 'O':120, 'P':83},
    '만해광장': {'N':17},
    '팔정도': {'A':49, 'B':39, 'C':49, 'D':39, 'E':49, 'F':39, 'G':49, 'H':39},
    'A': {'만해관':33, '법학관':39, 'B':38, 'H':35, '대운동장':129, '팔정도':49, 'J':61},
    'B': {'명진관':32, 'A':38, 'C':38, '팔정도':39},
    'C': {'신공학관':88, 'B':38, 'D':35, '팔정도':49, '중앙도서관':26},
    'D': {'본관':12, 'C':35, 'E':35, '팔정도':39},
    'E': {'다향관':18, 'D':35, 'F':38, '팔정도':49, 'M':55},
    'F': {'E':38, 'G':38, '팔정도':39},
    'G': {'F':38, '법학관':33, 'H':35, '팔정도':49},
    'H': {'법학관':12, 'A':35, 'G':35, '팔정도':39},
    'J': {'A': 61, '과학관':43, 'K':89},
    'K': {'과학관':46, '상록원':47, '중앙도서관':54, 'J':89},
    'M': {'E':55, 'N':49, '체육관':76},
    'N': {'원흥관':35, 'M': 49, 'O':105, '만해광장':17},
    'O': {'정보문화관':28, '학생회관':24, 'N':105, '후문':120, 'P':46},
    'P': {'학림관':108, '후문':83, 'O':46}
}

print(dijkstra(graph, '경영관'))
