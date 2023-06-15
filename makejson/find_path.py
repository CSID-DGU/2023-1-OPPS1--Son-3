import heapq
import json

"""
import os
"""

# 다익스트라 알고리즘 구현
def dijkstra(graph, first, last):  # 그래프, 출발지, 도착지 입력
    distance = {node: [float('inf'), first] for node in graph}  # 거리 배열의 거리를 모두 inf로 초기화
    distance[first] = [0, first]  # 출발지의 거리 0으로 설정
    queue = []  # 큐 생성
    heapq.heappush(queue, [distance[first][0], first])  # [거리, 노드] 형태로 우선순위 큐에 삽입
    while queue:
        current_distance, current_node = heapq.heappop(queue)
        if distance[current_node][0] < current_distance:
            continue
        for next_node, weight in graph[current_node].items():
            total_distance = current_distance + weight
            if total_distance < distance[next_node][0]:  # (기존 거리 + 추가되는 거리) < (거리 배열의 거리) 인 경우
                distance[next_node] = [total_distance, current_node]  # 거리 배열의 거리를 (기존 거리 + 추가되는 거리)로 업데이트
                heapq.heappush(queue, [total_distance, next_node])  # 우선순위 큐에 삽입

    # 출발지에서 도착지까지의 모든 노드 출력
    # 도착지에서부터 역순으로 추적
    path = last
    path_output = []
    path_output.append(last)
    while distance[path][1] != first:
        path_output.append(distance[path][1])
        path = distance[path][1]
    path_output.append(first)
    path_output.reverse()  # 역순으로 출력되므로 reverse 하기
    return path_output


# 다익스트라 알고리즘2 구현
def dijkstra2(graph, first, last):  # 그래프, 출발지, 도착지 입력
    distance = {node: [float('inf'), first] for node in graph}  # 거리 배열의 거리를 모두 inf로 초기화
    distance[first] = [0, first]  # 출발지의 거리 0으로 설정
    queue = []  # 큐 생성
    heapq.heappush(queue, [distance[first][0], first])  # [거리, 노드] 형태로 우선순위 큐에 삽입
    while queue:
        current_distance, current_node = heapq.heappop(queue)
        if distance[current_node][0] < current_distance:
            continue
        for next_node, weight in graph[current_node].items():
            total_distance = current_distance + weight
            if total_distance < distance[next_node][0]:  # (기존 거리 + 추가되는 거리) < (거리 배열의 거리) 인 경우
                distance[next_node] = [total_distance, current_node]  # 거리 배열의 거리를 (기존 거리 + 추가되는 거리)로 업데이트
                heapq.heappush(queue, [total_distance, next_node])  # 우선순위 큐에 삽입

    return distance[last][0]  # 해당 경로의 가중치 합 반환


# 빠른길로 다니는 동국대 지도를 graph1로 구현
# 건물과 길목은 노드로 설정 (건물의 노드는 건물명, 길목의 노드는 알파벳으로 설정)
# 길은 간선으로 설정
# 가중치는 노드 간 직선거리 (네이버 지도로 측정)
graph1 = {
    '경영관': {'사회과학관': 47, '문화관': 60, 'QQ': 80},
    '과학관': {'B': 50, 'D': 13},
    '다향관': {'L': 25, 'O': 47},
    '만해관': {'F': 20, 'M': 15, '법학관': 38},
    '명진관': {'D': 22, 'G': 17},
    '문화관': {'U': 105, '사회과학관': 53, '경영관': 60, '학술관': 40, 'OO': 72},
    '법학관': {'만해관': 38, 'P': 20, 'LL': 20},
    '본관1층': {'본관3층': 30, 'Q': 26, 'R': 26},
    '본관3층': {'본관1층': 30, 'J': 35, 'L': 37},
    '사회과학관': {'문화관': 53, '경영관': 47, 'QQ': 50, 'PP': 29},
    '상록원': {'A': 17, 'KK': 51},
    '신공학관': {'Q': 32},
    '원흥관1층': {'II': 18, '원흥관4층': 30, '원흥관6층': 44},
    '원흥관4층': {'R': 17, '원흥관1층': 30, '원흥관6층': 15},
    '원흥관6층': {'Q': 23, '원흥관4층': 15, '원흥관1층': 44},
    '정보문화관': {'II': 30, 'FF': 30},
    '중앙도서관': {'H': 12, 'Q': 50},
    '학림관': {'EE': 75, 'Y': 70, '체육관': 32},
    '학생회관': {'AA': 5, 'BB': 25},
    '학술관': {'문화관': 40, 'U': 72},
    '혜화관1층': {'혜화관4층': 26, 'PP': 20},
    '혜화관4층': {'혜화관1층': 26, 'M': 25},
    '혜화문': {'OO': 75, 'U': 43},
    '대운동장': {'KK': 20},
    '체육관': {'V': 60, '학림관': 32},
    '후문': {'EE': 15},
    '만해광장': {'W': 1, 'GG': 19},
    '팔정도': {'G': 36, 'J': 50, 'K': 36, 'L': 50, 'N': 36, 'O': 52, 'P': 41, 'F': 56},
    'A': {'B': 21, '상록원': 17},
    'B': {'과학관': 50, 'C': 12, 'A': 21},
    'C': {'B': 12, 'D': 50, 'H': 20},
    'D': {'과학관': 13, '명진관': 22, 'C': 50, 'E': 37},
    'E': {'D': 37, 'F': 57},
    'F': {'X': 25, '만해관': 20, '팔정도': 56, 'P': 35, 'G': 35, 'E': 57},
    'G': {'명진관': 17, '팔정도': 36, 'F': 35, 'J': 26},
    'H': {'C': 20, 'I': 7, '중앙도서관': 12},
    'I': {'H': 7, 'J': 7, 'Q': 50},
    'J': {'K': 34, '팔정도': 50, 'G': 26, 'I': 7, '본관3층': 35},
    'K': {'팔정도': 36, 'J': 34, 'L': 36},
    'L': {'K': 36, '팔정도': 50, 'N': 34, '다향관': 25, 'T': 30, 'S': 37, '본관3층': 37},
    'M': {'만해관': 15, 'Z': 40, 'MM': 48, '혜화관4층': 25},
    'N': {'팔정도': 36, 'O': 36, 'L': 34},
    'O': {'다향관': 47, 'N': 36, '팔정도': 52, 'P': 20, 'LL': 28},
    'P': {'법학관': 20, 'O': 20, 'F': 35, '팔정도': 41},
    'Q': {'신공학관': 32, '중앙도서관': 50, '본관1층': 26, '원흥관6층': 23, 'R': 50, 'I': 50},
    'R': {'Q': 50, '본관1층': 26, 'S': 30, 'JJ': 21, '원흥관4층': 17},
    'S': {'L': 37, 'R': 30, 'JJ': 36},
    'T': {'L': 30, 'V': 32},
    'U': {'학술관': 72, '문화관': 105, '혜화문': 43},
    'V': {'체육관': 60, 'T': 32, 'W': 23},
    'W': {'만해광장': 1, 'JJ': 18, 'V': 23},
    'X': {'F': 25, 'Z': 34, 'KK': 20},
    'Y': {'AA': 30, '학림관': 70},
    'Z': {'X': 34, 'M': 40},
    'AA': {'학생회관': 5, 'FF': 30, 'Y': 30},
    'BB': {'학생회관': 25, 'CC': 20},
    'CC': {'BB': 20, 'DD': 50},
    'DD': {'CC': 50, 'EE': 20},
    'EE': {'학림관': 75, 'DD': 20, '후문': 15},
    'FF': {'정보문화관': 30, 'GG': 23, 'AA': 30},
    'GG': {'만해광장': 19, 'HH': 11, 'FF': 23},
    'HH': {'GG': 11, 'JJ': 65, 'II': 30},
    'II': {'HH': 30, '원흥관1층': 18, '정보문화관': 11},
    'JJ': {'R': 21, 'S': 36, 'W': 18, 'HH': 65},
    'KK': {'대운동장': 20, 'X': 20, 'SS': 33, '상록원': 51},
    'LL': {'법학관': 20, 'O': 28, 'MM': 47},
    'MM': {'M': 48, 'NN': 33, 'LL': 47},
    'NN': {'MM': 33, 'OO': 52},
    'OO': {'PP': 53, '문화관': 72, '혜화문': 75, 'NN': 52},
    'PP': {'QQ': 30, '사회과학관': 29, 'OO': 53, '혜화관1층': 20},
    'QQ': {'사회과학관': 50, 'PP': 30, 'RR': 30, '경영관': 80},
    'RR': {'SS': 27, 'QQ': 30},
    'SS': {'KK': 33, 'RR': 27}
}

node_list = ['경영관', '과학관', '다향관', '만해관', '명진관', '문화관', '법학관', '본관1층', '본관3층', '사회과학관', '상록원', '신공학관', '원흥관1층', '원흥관4층', '원흥관6층', '정보문화관', '중앙도서관', '학림관', '학생회관', '학술관', '혜화관1층', '혜화관4층', '혜화문', '대운동장', '체육관', '후문', '만해광장', '팔정도']

# 빠른길 그래프 다익스트라 알고리즘 실행
path_all1 = {}
for start in node_list:
    path_start = {}
    for end in node_list:
        path_start[end] = dijkstra(graph1, start, end)
    path_all1[start] = path_start

# 빠른길 그래프 다익스트라 알고리즘2 실행
path_all3 = {}
for start in node_list:
    path_start = {}
    for end in node_list:
        path_start[end] = dijkstra2(graph1, start, end)
    path_all3[start] = path_start

# 빠른길 그래프를 path1.json 파일로 저장
file_path1 = "./frontend/src/lib/path/path1.json"
with open(file_path1, 'w', encoding='utf-8') as outfile:
    json.dump(path_all1, outfile, ensure_ascii=False, indent=4)

"""
parent_directory = os.path.abspath('..')
file_path1 = os.path.join(parent_directory, "./frontend/src/lib/path/path1.json")
with open(file_path1, 'w', encoding='utf-8') as outfile:
    json.dump(path_all1, outfile, ensure_ascii=False, indent=4)
"""

# 빠른길 그래프2를 path1_1.json 파일로 저장
file_path3 = "./frontend/src/lib/path/path1_1.json"
with open(file_path3, 'w', encoding='utf-8') as outfile:
    json.dump(path_all3, outfile, ensure_ascii=False, indent=4)

"""
parent_directory = os.path.abspath('..')
file_path3 = os.path.join(parent_directory, "./frontend/src/lib/path/path1_1.json")
with open(file_path3, 'w', encoding='utf-8') as outfile:
    json.dump(path_all3, outfile, ensure_ascii=False, indent=4)
"""

'''
출력형태
{
    출발지1: {
        도착지11: [출발지1 ~ 도착지11 노드들],
        도착지12: [출발지1 ~ 도착지12 노드들],
        ...
    },
    출발지2: {
        도착지21: [출발지2 ~ 도착지 21 노드들],
        도착지22: [출발지2 ~ 도착지 22 노드들],
        ...
    },
    ...
}
'''
