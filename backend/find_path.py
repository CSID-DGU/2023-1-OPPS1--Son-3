import heapq

def dijkstra(graph, start):
  distances = {}
  for node in graph:
    distances[node] = [float('inf')]
  distances[start][0] = 0
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
        heapq.heappush(queue, [distance, new_destination])
    
  return distances

graph = {
    'A': {'B': 8, 'C': 1, 'D': 2},
    'B': {},
    'C': {'B': 5, 'D': 2},
    'D': {'E': 3, 'F': 5},
    'E': {'F': 1},
    'F': {'A': 5}
}

print(dijkstra(graph, 'A'))