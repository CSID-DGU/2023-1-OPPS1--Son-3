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
    
  return distances

graph = {
    'A': {'B': 2, 'D': 1},
    'B': {'A': 2, 'C': 3, 'D': 2},
    'C': {'B': 3, 'F': 5},
    'D': {'A': 1, 'B': 2, 'E': 1},
    'E': {'D': 1, 'F': 2},
    'F': {'C': 5, 'E': 2}
}

print(dijkstra(graph, 'A'))